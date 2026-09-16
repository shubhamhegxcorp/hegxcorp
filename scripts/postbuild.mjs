import fs from "node:fs";

const stdinGuard = `import { Readable } from "node:stream";

// Container / daemon environment fix:
// Prevent Node.js ESM loader from throwing "open EEXIST" when accessing process.stdin
try {
  void process.stdin;
} catch {
  try {
    Object.defineProperty(process, "stdin", {
      value: new Readable({ read() {} }),
      configurable: true,
      enumerable: true,
      writable: true,
    });
  } catch {}
}
`;

// 1. Root entrypoint (in case Hostinger runs from project root)
fs.writeFileSync("server.js", `${stdinGuard}\nimport("./.output/server/index.mjs");\n`);

// 2. Output directory entrypoint (in case Hostinger runs inside .output)
if (fs.existsSync(".output")) {
  fs.writeFileSync(".output/server.js", `${stdinGuard}\nimport("./server/index.mjs");\n`);
}

console.log("✔ Successfully created server.js in root and in .output/ with stdin EEXIST guard");
