const logos = [
  { id: 1, name: "TechCorp", width: 100 },
  { id: 2, name: "GrowthCo", width: 90 },
  { id: 3, name: "ScaleUp", width: 110 },
  { id: 4, name: "DataFlow", width: 95 },
  { id: 5, name: "Nexus", width: 85 },
  { id: 6, name: "CloudBase", width: 105 },
  { id: 7, name: "PrimEdge", width: 92 },
  { id: 8, name: "LaunchPad", width: 108 },
];

function LogoPlaceholder({ name, width }: { name: string; width: number }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 h-10 rounded-md"
      style={{ width, background: "#F3F4F6" }}
      title={name}
    >
      <span
        className="text-xs font-bold tracking-wide text-[#9CA3AF]"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px" }}
      >
        {name}
      </span>
    </div>
  );
}

export function ClientLogos() {
  // Duplicate for seamless loop
  const all = [...logos, ...logos];

  return (
    <section className="border-y border-[#EAEAEA] bg-white py-14 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 mb-8 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Trusted by growing companies worldwide
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="flex gap-10 animate-marquee w-max">
          {all.map((logo, i) => (
            <LogoPlaceholder key={`${logo.id}-${i}`} name={logo.name} width={logo.width} />
          ))}
        </div>
      </div>
    </section>
  );
}
