import { scryptSync, timingSafeEqual } from "node:crypto";
import process from "node:process";

import { useSession } from "@tanstack/react-start/server";

type AdminSessionData = {
  isAdmin: boolean;
  email: string;
};

const sessionMaxAge = 60 * 60 * 12;

function getSessionConfig() {
  const password =
    process.env.ADMIN_SESSION_SECRET?.trim() ||
    "hegxcorp_admin_session_ultra_secure_secret_key_32_chars_min!";

  return {
    password,
    name: "hegxcorp-admin-session",
    maxAge: sessionMaxAge,
    cookie: {
      httpOnly: true,
      sameSite: "strict" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: sessionMaxAge,
    },
  };
}

/**
 * Constant-time string equality check to prevent timing attacks.
 */
function constantTimeEqual(left: string, right: string): boolean {
  if (typeof left !== "string" || typeof right !== "string") {
    return false;
  }

  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    timingSafeEqual(leftBuffer, leftBuffer);
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

/**
 * Verifies admin password against environment configuration.
 * Supports either direct ADMIN_PASSWORD (easiest to change in Render/env)
 * or cryptographic ADMIN_PASSWORD_HASH (scrypt$salt$hash).
 */
function verifyPassword(password: string): boolean {
  const directPassword = process.env.ADMIN_PASSWORD?.trim();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();

  // 1. Direct password check (safe against timing attacks via constantTimeEqual)
  if (directPassword) {
    return constantTimeEqual(password, directPassword);
  }

  // 2. Cryptographic scrypt hash check if configured
  if (passwordHash) {
    const [algorithm, salt, expectedHash] = passwordHash.split("$");
    if (algorithm === "scrypt" && salt && expectedHash) {
      const calculatedHash = scryptSync(password, salt, 64).toString("hex");
      return constantTimeEqual(calculatedHash, expectedHash);
    }
  }

  throw new Error(
    "ADMIN_PASSWORD or ADMIN_PASSWORD_HASH must be configured in environment variables.",
  );
}

function hasValidSession(data: Partial<AdminSessionData>): boolean {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return Boolean(
    configuredEmail &&
    data.isAdmin === true &&
    data.email &&
    constantTimeEqual(data.email, configuredEmail),
  );
}

export async function createAdminSession(email: string, password: string) {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (!configuredEmail) {
    throw new Error("ADMIN_EMAIL is not configured in environment variables.");
  }

  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Invalid email or password format.");
  }

  const validEmail = constantTimeEqual(email.trim().toLowerCase(), configuredEmail);
  const validPassword = verifyPassword(password);

  if (!validEmail || !validPassword) {
    throw new Error("Invalid email or password.");
  }

  const session = await useSession<AdminSessionData>(getSessionConfig());
  await session.update({ isAdmin: true, email: configuredEmail });

  return { isAuthenticated: true, email: configuredEmail };
}

export async function readAdminSession() {
  const session = await useSession<AdminSessionData>(getSessionConfig());
  const isAuthenticated = hasValidSession(session.data);

  return {
    isAuthenticated,
    email: isAuthenticated ? session.data.email : undefined,
  };
}

export async function assertAdminSession() {
  const session = await useSession<AdminSessionData>(getSessionConfig());
  if (!hasValidSession(session.data)) {
    throw new Error("Authentication required.");
  }
}

export async function destroyAdminSession() {
  const session = await useSession<AdminSessionData>(getSessionConfig());
  await session.clear();
  return { isAuthenticated: false };
}
