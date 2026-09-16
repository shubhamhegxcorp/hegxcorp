import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

import { useSession } from "@tanstack/react-start/server";
import { roleToAccessLevel, type AdminAccessLevel } from "./admin-users";
import { getDbClient } from "./db.server";
import { generateId } from "./id";

type AdminSessionData = {
  isAdmin: boolean;
  email: string;
  accessLevel: AdminAccessLevel;
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

function constantTimeEqual(left: string, right: string): boolean {
  if (typeof left !== "string" || typeof right !== "string") return false;

  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    timingSafeEqual(leftBuffer, leftBuffer);
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

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

function getSessionAccessLevel(data: Partial<AdminSessionData>): AdminAccessLevel {
  return data.accessLevel === "MINIMUM" ? "MINIMUM" : "FULL";
}

async function saveAdminSession(email: string, accessLevel: AdminAccessLevel) {
  const session = await useSession<AdminSessionData>(getSessionConfig());
  await session.update({ isAdmin: true, email, accessLevel });
}

export async function createAdminSession(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) {
    throw new Error("Invalid email or password.");
  }

  try {
    const sql = getDbClient();
    const users = await sql<{ id: string; email: string; password: string; role: string | null }[]>`
      SELECT id, email, password, role FROM "User"
      WHERE LOWER(email) = ${normalizedEmail}
      LIMIT 1
    `;

    if (users.length > 0) {
      const user = users[0];
      if (!matchPassword(password, user.password)) {
        throw new Error("Invalid email or password.");
      }

      const accessLevel = roleToAccessLevel(user.role);
      await saveAdminSession(normalizedEmail, accessLevel);
      return { isAuthenticated: true, email: normalizedEmail, accessLevel };
    }
  } catch (err: any) {
    if (err?.message === "Invalid email or password.") throw err;
    console.warn("DB user check failed, falling back to environment credentials:", err?.message);
  }

  const envEmail = (process.env.ADMIN_EMAIL?.trim() || "rajeshsahani3455@gmail.com").toLowerCase();
  const envPassword =
    process.env.ADMIN_PASSWORD?.trim() || process.env.ADMIN_PASSWORD_HASH?.trim() || "hegxcorp";

  if (!constantTimeEqual(normalizedEmail, envEmail) || !matchPassword(password, envPassword)) {
    throw new Error("Invalid email or password.");
  }

  try {
    const sql = getDbClient();
    await sql`
      INSERT INTO "User" (id, name, email, password, role, "updatedAt")
      VALUES (${generateId()}, 'Admin', ${normalizedEmail}, ${hashPassword(password)}, 'FULL_ADMIN', NOW())
      ON CONFLICT (email) DO UPDATE SET
        password = ${hashPassword(password)},
        role = 'FULL_ADMIN',
        "updatedAt" = NOW()
    `;
  } catch (err: any) {
    console.warn("Auto-seed admin user in DB skipped/failed:", err?.message);
  }

  await saveAdminSession(normalizedEmail, "FULL");
  return { isAuthenticated: true, email: normalizedEmail, accessLevel: "FULL" as const };
}

export async function changeAdminPassword(currentPassword: string, newPassword: string) {
  const session = await useSession<AdminSessionData>(getSessionConfig());
  if (!hasValidSession(session.data) || !session.data.email) {
    throw new Error("Authentication required.");
  }

  const normalizedEmail = session.data.email.toLowerCase();
  const sql = getDbClient();
  const users = await sql<{ id: string; password: string }[]>`
    SELECT id, password FROM "User"
    WHERE LOWER(email) = ${normalizedEmail}
    LIMIT 1
  `;

  const envPassword =
    process.env.ADMIN_PASSWORD?.trim() || process.env.ADMIN_PASSWORD_HASH?.trim() || "hegxcorp";
  const currentValid = users.length
    ? matchPassword(currentPassword, users[0].password)
    : matchPassword(currentPassword, envPassword);

  if (!currentValid) {
    throw new Error("Current password is incorrect.");
  }

  if (!newPassword || newPassword.length < 6) {
    throw new Error("New password must be at least 6 characters long.");
  }

  await sql`
    INSERT INTO "User" (id, name, email, password, role, "updatedAt")
    VALUES (${users[0]?.id || generateId()}, 'Admin', ${normalizedEmail}, ${hashPassword(newPassword)}, 'FULL_ADMIN', NOW())
    ON CONFLICT (email) DO UPDATE SET password = ${hashPassword(newPassword)}, "updatedAt" = NOW()
  `;

  return { success: true, message: "Password changed successfully in database." };
}

export async function readAdminSession() {
  try {
    const session = await useSession<AdminSessionData>(getSessionConfig());
    const isAuthenticated = hasValidSession(session.data);

    return {
      isAuthenticated,
      email: isAuthenticated ? session.data.email : undefined,
      accessLevel: isAuthenticated ? getSessionAccessLevel(session.data) : undefined,
    };
  } catch (err) {
    console.warn("readAdminSession warning:", err);
    return { isAuthenticated: false };
  }
}

export async function assertAdminSession(): Promise<{
  email: string;
  accessLevel: AdminAccessLevel;
}> {
  try {
    const session = await useSession<AdminSessionData>(getSessionConfig());
    if (!hasValidSession(session.data) || !session.data.email) {
      throw new Error("Authentication required.");
    }

    return { email: session.data.email, accessLevel: getSessionAccessLevel(session.data) };
  } catch (err: any) {
    if (err?.message === "Authentication required.") throw err;
    throw new Error("Authentication required.");
  }
}

export async function assertFullAdminSession() {
  const session = await assertAdminSession();
  if (session.accessLevel !== "FULL") {
    throw new Error("Full access admin permission required.");
  }
  return session;
}

export async function destroyAdminSession() {
  try {
    const session = await useSession<AdminSessionData>(getSessionConfig());
    await session.clear();
  } catch (err) {
    console.warn("destroyAdminSession warning:", err);
  }
  return { isAuthenticated: false };
}
