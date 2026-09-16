import { randomUUID } from "node:crypto";

import { assertFullAdminSession, hashPassword } from "./admin-auth.server";
import { getDbClient } from "./db.server";
import {
  accessLevelToRole,
  roleToAccessLevel,
  type AdminAccessLevel,
  type AdminUser,
} from "./admin-users";

export type AdminUserInput = {
  name: string;
  email: string;
  password: string;
  accessLevel: AdminAccessLevel;
};

export type UpdateAdminUserInput = {
  id: string;
  name: string;
  accessLevel: AdminAccessLevel;
  password?: string;
};

type AdminUserRow = {
  id: string;
  name: string;
  email: string;
  role: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
};

function mapAdminUser(row: AdminUserRow): AdminUser {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    accessLevel: roleToAccessLevel(row.role),
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString(),
  };
}

export async function listSavedAdminUsers() {
  await assertFullAdminSession();
  const sql = getDbClient();
  const rows = await sql<AdminUserRow[]>`
    SELECT id, name, email, role, "createdAt", "updatedAt"
    FROM "User"
    ORDER BY "createdAt" DESC
  `;

  return rows.map(mapAdminUser);
}

export async function createSavedAdminUser(input: AdminUserInput) {
  await assertFullAdminSession();
  const sql = getDbClient();
  const normalizedEmail = input.email.trim().toLowerCase();

  const existing = await sql<{ id: string }[]>`
    SELECT id FROM "User"
    WHERE LOWER(email) = ${normalizedEmail}
    LIMIT 1
  `;
  if (existing.length > 0) {
    throw new Error("An administrator with this email address already exists.");
  }

  const rows = await sql<AdminUserRow[]>`
    INSERT INTO "User" (id, name, email, password, role, "updatedAt")
    VALUES (
      ${randomUUID()},
      ${input.name.trim()},
      ${normalizedEmail},
      ${hashPassword(input.password)},
      ${accessLevelToRole(input.accessLevel)},
      now()
    )
    RETURNING id, name, email, role, "createdAt", "updatedAt"
  `;

  return mapAdminUser(rows[0]);
}

export async function updateSavedAdminUser(input: UpdateAdminUserInput) {
  await assertFullAdminSession();
  const sql = getDbClient();

  if (input.accessLevel === "MINIMUM") {
    const fullAdmins = await sql<{ id: string }[]>`
      SELECT id FROM "User"
      WHERE role IN ('ADMIN', 'FULL_ADMIN') OR role IS NULL
    `;
    const isTargetFull = fullAdmins.some((a) => a.id === input.id);
    if (isTargetFull && fullAdmins.length <= 1) {
      throw new Error("At least one Full Access administrator must remain.");
    }
  }

  const password = input.password?.trim();
  if (password && password.length < 6) {
    throw new Error("Password must be at least 6 characters long.");
  }

  const rows = password
    ? await sql<AdminUserRow[]>`
        UPDATE "User"
        SET
          name = ${input.name.trim()},
          password = ${hashPassword(password)},
          role = ${accessLevelToRole(input.accessLevel)},
          "updatedAt" = now()
        WHERE id = ${input.id}
        RETURNING id, name, email, role, "createdAt", "updatedAt"
      `
    : await sql<AdminUserRow[]>`
        UPDATE "User"
        SET
          name = ${input.name.trim()},
          role = ${accessLevelToRole(input.accessLevel)},
          "updatedAt" = now()
        WHERE id = ${input.id}
        RETURNING id, name, email, role, "createdAt", "updatedAt"
      `;

  if (!rows[0]) {
    throw new Error("Admin user not found.");
  }

  return mapAdminUser(rows[0]);
}

export async function deleteSavedAdminUser(id: string) {
  const session = await assertFullAdminSession();
  const sql = getDbClient();

  const admins = await sql<{ id: string; email: string }[]>`
    SELECT id, email
    FROM "User"
    WHERE role IN ('ADMIN', 'FULL_ADMIN') OR role IS NULL
  `;
  const target = admins.find((admin) => admin.id === id);

  if (target && admins.length <= 1) {
    throw new Error("At least one Full Access administrator must remain.");
  }

  if (target && target.email.toLowerCase() === session.email.toLowerCase()) {
    throw new Error("You cannot delete your own admin account while signed in.");
  }

  await sql`
    DELETE FROM "User"
    WHERE id = ${id}
  `;

  return { success: true };
}
