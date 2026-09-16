import fs from "node:fs";
import path from "node:path";

function search(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === ".git" || entry.name === ".output") continue;
        search(full);
      } else if (
        entry.name.endsWith(".js") ||
        entry.name.endsWith(".mjs") ||
        entry.name.endsWith(".ts")
      ) {
        try {
          const content = fs.readFileSync(full, "utf8");
          if (
            content.includes("syscall") &&
            content.includes("code") &&
            (content.includes("EEXIST") || content.includes("open"))
          ) {
            console.log("SYSCALL MATCH IN:", full);
          }
        } catch (e) {}
      }
    }
  } catch (e) {}
}

console.log("Searching...");
search(".");
console.log("Done.");
