import { timingSafeEqual, scryptSync } from "node:crypto";
import process from "node:process";
import { u as useSession } from "./server-BjMtisnP.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
const sessionMaxAge = 60 * 60 * 12;
function getRequiredEnvironmentValue(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error("Admin login is not configured.");
  }
  return value;
}
function getSessionConfig() {
  const password = getRequiredEnvironmentValue("ADMIN_SESSION_SECRET");
  if (password.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  }
  return {
    password,
    name: "hegxcorp-admin-session",
    maxAge: sessionMaxAge,
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: sessionMaxAge
    }
  };
}
function constantTimeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) {
    timingSafeEqual(leftBuffer, leftBuffer);
    return false;
  }
  return timingSafeEqual(leftBuffer, rightBuffer);
}
function verifyPassword(password, storedHash) {
  const [algorithm, salt, expectedHash] = storedHash.split("$");
  if (algorithm !== "scrypt" || !salt || !expectedHash) {
    throw new Error("ADMIN_PASSWORD_HASH is invalid.");
  }
  const calculatedHash = scryptSync(password, salt, 64).toString("hex");
  return constantTimeEqual(calculatedHash, expectedHash);
}
function hasValidSession(data) {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return Boolean(
    configuredEmail && data.isAdmin === true && data.email && constantTimeEqual(data.email, configuredEmail)
  );
}
async function createAdminSession(email, password) {
  const configuredEmail = getRequiredEnvironmentValue("ADMIN_EMAIL").toLowerCase();
  const passwordHash = getRequiredEnvironmentValue("ADMIN_PASSWORD_HASH");
  const validEmail = constantTimeEqual(email.trim().toLowerCase(), configuredEmail);
  const validPassword = verifyPassword(password, passwordHash);
  if (!validEmail || !validPassword) {
    throw new Error("Invalid email or password.");
  }
  const session = await useSession(getSessionConfig());
  await session.update({ isAdmin: true, email: configuredEmail });
  return { isAuthenticated: true, email: configuredEmail };
}
async function readAdminSession() {
  const session = await useSession(getSessionConfig());
  const isAuthenticated = hasValidSession(session.data);
  return {
    isAuthenticated,
    email: isAuthenticated ? session.data.email : void 0
  };
}
async function assertAdminSession() {
  const session = await useSession(getSessionConfig());
  if (!hasValidSession(session.data)) {
    throw new Error("Authentication required.");
  }
}
async function destroyAdminSession() {
  const session = await useSession(getSessionConfig());
  await session.clear();
  return { isAuthenticated: false };
}
export {
  assertAdminSession,
  createAdminSession,
  destroyAdminSession,
  readAdminSession
};
