import logo1 from "@/assets/logos/clients/1-4.webp";
import logo2 from "@/assets/logos/clients/2-4.webp";
import logo7 from "@/assets/logos/clients/7-3.webp";
import logo8 from "@/assets/logos/clients/8-4.webp";
import logo9 from "@/assets/logos/clients/9-4.webp";
import logo10 from "@/assets/logos/clients/10-3.webp";
import logo11 from "@/assets/logos/clients/11-3.webp";
import logo12 from "@/assets/logos/clients/12-5.webp";
import logo13 from "@/assets/logos/clients/13-3.webp";
import logo14 from "@/assets/logos/clients/14-3.webp";
import logo15 from "@/assets/logos/clients/15.webp";
import logo16 from "@/assets/logos/clients/16.webp";
import logo17 from "@/assets/logos/clients/17.webp";
import logo18 from "@/assets/logos/clients/18.webp";
import logo19 from "@/assets/logos/clients/19.webp";
import logo20 from "@/assets/logos/clients/20.webp";
import logo21 from "@/assets/logos/clients/21.webp";
import logo22 from "@/assets/logos/clients/22.webp";

const logos: { id: number; src: string; alt: string }[] = [
  { id: 1, src: logo1, alt: "Client 1" },
  { id: 2, src: logo2, alt: "Client 2" },
  { id: 3, src: logo7, alt: "Client 3" },
  { id: 4, src: logo8, alt: "Client 4" },
  { id: 5, src: logo9, alt: "Client 5" },
  { id: 6, src: logo10, alt: "Client 6" },
  { id: 7, src: logo11, alt: "Client 7" },
  { id: 8, src: logo12, alt: "Client 8" },
  { id: 9, src: logo13, alt: "Client 9" },
  { id: 10, src: logo14, alt: "Client 10" },
  { id: 11, src: logo15, alt: "Client 11" },
  { id: 12, src: logo16, alt: "Client 12" },
  { id: 13, src: logo17, alt: "Client 13" },
  { id: 14, src: logo18, alt: "Client 14" },
  { id: 15, src: logo19, alt: "Client 15" },
  { id: 16, src: logo20, alt: "Client 16" },
  { id: 17, src: logo21, alt: "Client 17" },
  { id: 18, src: logo22, alt: "Client 18" },
];

export function ClientLogos() {
  // Triple the set so the marquee scrolls through a full copy before looping
  const track = [...logos, ...logos, ...logos];

  return (
    <section className="border-y border-[#EAEAEA] bg-white py-12 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto max-w-[1280px] px-6 mb-10 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Trusted by businesses across&nbsp;
          <span className="text-[#fc9c44]">India, USA, UK &amp; UAE</span>
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10"
          style={{ background: "linear-gradient(to right, white 40%, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10"
          style={{ background: "linear-gradient(to left, white 40%, transparent)" }}
        />

        <div className="flex gap-12 animate-marquee w-max" style={{ willChange: "transform" }}>
          {track.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="client-logo-item shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className="client-logo-img block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
