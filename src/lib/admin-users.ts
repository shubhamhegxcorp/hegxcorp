import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

export const adminAccessLevels = ["FULL", "MINIMUM"] as const;
export type AdminAccessLevel = (typeof adminAccessLevels)[number];

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  accessLevel: AdminAccessLevel;
  createdAt: string;
  updatedAt: string;
};

export const adminUserInputSchema = z.object({
  name: z.string().trim().min(2, "Enter the admin name").max(120),
  email: z.string().trim().toLowerCase().email("Enter a valid admin email").max(200),
  password: z.string().min(6, "Password must be at least 6 characters").max(200),
  accessLevel: z.enum(adminAccessLevels),
});

export const updateAdminUserInputSchema = z.object({
  id: z.string().min(1),
  name: z.string().trim().min(2, "Enter the admin name").max(120),
  accessLevel: z.enum(adminAccessLevels),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(200)
    .optional()
    .or(z.literal("")),
});

export function roleToAccessLevel(role?: string | null): AdminAccessLevel {
  return role === "MINIMUM_ADMIN" ? "MINIMUM" : "FULL";
}

export function accessLevelToRole(accessLevel: AdminAccessLevel) {
  return accessLevel === "FULL" ? "FULL_ADMIN" : "MINIMUM_ADMIN";
}

export const listAdminUsers = createServerFn({ method: "POST" }).handler(async () => {
  const { listSavedAdminUsers } = await import("./admin-users.server");
  return listSavedAdminUsers();
});

export const createAdminUser = createServerFn({ method: "POST" })
  .validator(adminUserInputSchema)
  .handler(async ({ data }) => {
    const { createSavedAdminUser } = await import("./admin-users.server");
    return createSavedAdminUser(data);
  });

export const updateAdminUser = createServerFn({ method: "POST" })
  .validator(updateAdminUserInputSchema)
  .handler(async ({ data }) => {
    const { updateSavedAdminUser } = await import("./admin-users.server");
    return updateSavedAdminUser(data);
  });

export const deleteAdminUser = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string().min(1) }))
  .handler(async ({ data }) => {
    const { deleteSavedAdminUser } = await import("./admin-users.server");
    return deleteSavedAdminUser(data.id);
  });
