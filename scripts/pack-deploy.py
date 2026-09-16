import os
import sys
import zipfile

OUTPUT_ZIP = "deploy.zip"

# Include the pre-built .output directory and server.js so Hostinger does NOT rebuild
ITEMS_TO_PACK = [
    ".output",
    "public",
    "server.js",
    "scripts",
    "package.json",
    "package-lock.json",
    "prisma",
    "prisma.config.ts",
    ".env.example",
]

EXCLUDE_PATTERNS = [
    ".git",
    "node_modules",
    ".env.local",
    "deploy.zip",
]

def should_exclude(rel_path):
    normalized = rel_path.replace("\\", "/")
    for pattern in EXCLUDE_PATTERNS:
        if normalized == pattern or normalized.startswith(pattern + "/"):
            return True
    return False

def pack():
    if os.path.exists(OUTPUT_ZIP):
        os.remove(OUTPUT_ZIP)

    print(f"Creating {OUTPUT_ZIP} with pre-built .output (no rebuild needed)...")
    count = 0

    with zipfile.ZipFile(OUTPUT_ZIP, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        for item in ITEMS_TO_PACK:
            if not os.path.exists(item):
                print(f"Skipping missing item: {item}")
                continue

            if os.path.isfile(item):
                rel_path = item.replace("\\", "/")
                if should_exclude(rel_path):
                    continue
                with open(item, "rb") as f:
                    data = f.read()

                zinfo = zipfile.ZipInfo(rel_path)
                zinfo.create_system = 3  # Unix
                mode = 0o755 if rel_path.endswith((".sh", ".js", ".mjs")) else 0o644
                zinfo.external_attr = (mode | 0o100000) << 16
                zf.writestr(zinfo, data)
                count += 1
            elif os.path.isdir(item):
                for root, dirs, files in os.walk(item):
                    for d in dirs:
                        full_dir = os.path.join(root, d)
                        rel_dir = os.path.relpath(full_dir, ".").replace("\\", "/") + "/"
                        if should_exclude(rel_dir.rstrip("/")):
                            continue
                        zinfo = zipfile.ZipInfo(rel_dir)
                        zinfo.create_system = 3
                        zinfo.external_attr = (0o755 | 0o040000) << 16
                        zf.writestr(zinfo, b"")

                    for file_name in files:
                        full_path = os.path.join(root, file_name)
                        rel_path = os.path.relpath(full_path, ".").replace("\\", "/")
                        if should_exclude(rel_path):
                            continue

                        with open(full_path, "rb") as f:
                            data = f.read()

                        zinfo = zipfile.ZipInfo(rel_path)
                        zinfo.create_system = 3
                        mode = 0o755 if rel_path.endswith((".sh", ".js", ".mjs")) else 0o644
                        zinfo.external_attr = (mode | 0o100000) << 16
                        zf.writestr(zinfo, data)
                        count += 1

    size_mb = os.path.getsize(OUTPUT_ZIP) / (1024 * 1024)
    print(f"Successfully packed {count} files into {OUTPUT_ZIP} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    pack()
