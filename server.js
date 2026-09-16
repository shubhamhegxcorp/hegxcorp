import { Readable } from "node:stream";

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

import("./.output/server/index.mjs");
