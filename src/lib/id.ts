// Client-safe unique id generator.
//
// `crypto.randomUUID()` only exists in *secure contexts* (HTTPS, or
// localhost/127.0.0.1). When the app is opened over plain HTTP on a LAN IP
// — which is exactly what `vite dev --host` exposes — `crypto.randomUUID`
// is `undefined`, and calling it directly throws
// "TypeError: crypto.randomUUID is not a function", which crashes the render.
//
// This helper degrades gracefully:
//   1. `crypto.randomUUID()`      when available (secure context)
//   2. `crypto.getRandomValues()` to build a spec-compliant UUID v4
//      (this API is NOT restricted to secure contexts)
//   3. a `Math.random()` fallback as a last resort
export function generateId(): string {
  const cryptoObj = typeof crypto !== "undefined" ? crypto : undefined;

  if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
    return cryptoObj.randomUUID();
  }

  if (cryptoObj && typeof cryptoObj.getRandomValues === "function") {
    const bytes = cryptoObj.getRandomValues(new Uint8Array(16));
    // Set the version (4) and variant (10xx) bits per RFC 4122.
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
    return (
      hex.slice(0, 4).join("") +
      "-" +
      hex.slice(4, 6).join("") +
      "-" +
      hex.slice(6, 8).join("") +
      "-" +
      hex.slice(8, 10).join("") +
      "-" +
      hex.slice(10, 16).join("")
    );
  }

  // Extremely unlikely, but never throw: fall back to a non-crypto id.
  return `id_${Date.now().toString(16)}_${Math.random().toString(16).slice(2, 14)}`;
}
