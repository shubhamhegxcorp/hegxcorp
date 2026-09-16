import fs from "node:fs";
import { execSync } from "node:child_process";

if (fs.existsSync(".output/server/index.mjs")) {
  console.log("✔ Pre-built .output found. Skipping Vite build.");
  process.exit(0);
}

if (fs.existsSync("server.js")) {
  try {
    fs.unlinkSync("server.js");
  } catch (e) {
    console.warn("Could not unlink server.js:", e);
  }
}

console.log("➜ Running vite build...");
execSync("npx vite build", { stdio: "inherit" });

console.log("➜ Running postbuild...");
await import("./postbuild.mjs");
