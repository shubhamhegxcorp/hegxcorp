import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

export const adminLoginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(200),
  password: z.string().min(1, "Enter your password").max(200),
});

export const testDebugFn = createServerFn({ method: "GET" }).handler(async () => {
  return {
    status: "ok",
    nodeVersion: process.version,
    platform: process.platform,
    hasDbUrl: Boolean(process.env.DATABASE_URL),
  };
});

export const getAdminSession = createServerFn({ method: "GET" }).handler(async () => {
  const { readAdminSession } = await import("./admin-auth.server");
  return readAdminSession();
});

export const loginAdmin = createServerFn({ method: "POST" })
  .validator(adminLoginSchema)
  .handler(async ({ data }) => {
    const { createAdminSession } = await import("./admin-auth.server");
    return createAdminSession(data.email, data.password);
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const { destroyAdminSession } = await import("./admin-auth.server");
  return destroyAdminSession();
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters"),
});

export const changeAdminPasswordFn = createServerFn({ method: "POST" })
  .validator(changePasswordSchema)
  .handler(async ({ data }) => {
    const { changeAdminPassword } = await import("./admin-auth.server");
    return changeAdminPassword(data.currentPassword, data.newPassword);
  });
