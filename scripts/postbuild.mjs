import fs from "node:fs";

// 1. Root entrypoint (in case Hostinger runs from project root)
fs.writeFileSync("server.js", 'import("./.output/server/index.mjs");\n');

// 2. Output directory entrypoint (in case Hostinger runs inside .output)
if (fs.existsSync(".output")) {
  fs.writeFileSync(".output/server.js", 'import("./server/index.mjs");\n');
}

console.log("✔ Successfully created server.js in root and in .output/");
