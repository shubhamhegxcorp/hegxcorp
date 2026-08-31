import { scryptSync, timingSafeEqual } from "node:crypto";
import process from "node:process";

import { useSession } from "@tanstack/react-start/server";
import { getDbClient } from "./db.server";
import { generateId } from "./id";

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
 * Matches a plain password against an expected value (plain text or scrypt hash).
 */
function matchPassword(providedPassword: string, expectedPasswordOrHash: string): boolean {
  if (!providedPassword || !expectedPasswordOrHash) return false;

  if (expectedPasswordOrHash.startsWith("scrypt$")) {
    const parts = expectedPasswordOrHash.split("$");
    if (parts.length === 3 && parts[1] && parts[2]) {
      const calculatedHash = scryptSync(providedPassword, parts[1], 64).toString("hex");
      return constantTimeEqual(calculatedHash, parts[2]);
    }
  }

  return constantTimeEqual(providedPassword, expectedPasswordOrHash);
}

function hasValidSession(data: Partial<AdminSessionData>): boolean {
  return Boolean(data.isAdmin === true && data.email);
}

/**
 * Authenticates admin:
 * 1. Checks PostgreSQL "User" table first.
 * 2. If no user is in DB, checks environment variables and auto-seeds the User in DB.
 */
export async function createAdminSession(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) {
    throw new Error("Invalid email or password.");
  }

  const sql = getDbClient();

  // 1. Check PostgreSQL User table
  try {
    const users = await sql<{ id: string; email: string; password: string }[]>`
      SELECT id, email, password FROM "User"
      WHERE LOWER(email) = ${normalizedEmail}
      LIMIT 1
    `;

    if (users.length > 0) {
      const user = users[0];
      const valid = matchPassword(password, user.password);
      if (!valid) {
        throw new Error("Invalid email or password.");
      }

      const session = await useSession<AdminSessionData>(getSessionConfig());
      await session.update({ isAdmin: true, email: normalizedEmail });
      return { isAuthenticated: true, email: normalizedEmail };
    }
  } catch (err: any) {
    // If table doesn't exist yet or query fails, fall back to environment check
    console.warn("DB user check failed, falling back to environment check:", err?.message);
  }

  // 2. Fallback to Environment Variables & Auto-seed DB
  const envEmail = (process.env.ADMIN_EMAIL?.trim() || "rajeshsahani3455@gmail.com").toLowerCase();
  const envPassword =
    process.env.ADMIN_PASSWORD?.trim() || process.env.ADMIN_PASSWORD_HASH?.trim() || "hegxcorp";

  const isEmailMatch = constantTimeEqual(normalizedEmail, envEmail);
  const isPassMatch = matchPassword(password, envPassword);

  if (!isEmailMatch || !isPassMatch) {
    throw new Error("Invalid email or password.");
  }

  // Auto-seed user in PostgreSQL so future logins and in-app password changes work seamlessly
  try {
    const userId = generateId();
    await sql`
      INSERT INTO "User" (id, name, email, password, role, "updatedAt")
      VALUES (${userId}, 'Admin', ${normalizedEmail}, ${password}, 'ADMIN', NOW())
      ON CONFLICT (email) DO UPDATE SET password = ${password}, "updatedAt" = NOW()
    `;
  } catch (err: any) {
    console.warn("Auto-seed admin user in DB skipped/failed:", err?.message);
  }

  const session = await useSession<AdminSessionData>(getSessionConfig());
  await session.update({ isAdmin: true, email: normalizedEmail });

  return { isAuthenticated: true, email: normalizedEmail };
}

/**
 * Changes admin password directly in PostgreSQL database without needing to touch environment variables!
 */
export async function changeAdminPassword(currentPassword: string, newPassword: string) {
  const session = await useSession<AdminSessionData>(getSessionConfig());
  if (!hasValidSession(session.data) || !session.data.email) {
    throw new Error("Authentication required.");
  }

  const normalizedEmail = session.data.email.toLowerCase();
  const sql = getDbClient();

  // Verify current password
  const users = await sql<{ id: string; password: string }[]>`
    SELECT id, password FROM "User"
    WHERE LOWER(email) = ${normalizedEmail}
    LIMIT 1
  `;

  let currentValid = false;
  if (users.length > 0) {
    currentValid = matchPassword(currentPassword, users[0].password);
  } else {
    // Fallback to env check
    const envPassword =
      process.env.ADMIN_PASSWORD?.trim() || process.env.ADMIN_PASSWORD_HASH?.trim() || "hegxcorp";
    currentValid = matchPassword(currentPassword, envPassword);
  }

  if (!currentValid) {
    throw new Error("Current password is incorrect.");
  }

  if (!newPassword || newPassword.length < 6) {
    throw new Error("New password must be at least 6 characters long.");
  }

  // Update in PostgreSQL database
  const userId = users[0]?.id || generateId();
  await sql`
    INSERT INTO "User" (id, name, email, password, role, "updatedAt")
    VALUES (${userId}, 'Admin', ${normalizedEmail}, ${newPassword}, 'ADMIN', NOW())
    ON CONFLICT (email) DO UPDATE SET password = ${newPassword}, "updatedAt" = NOW()
  `;

  return { success: true, message: "Password changed successfully in database." };
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
