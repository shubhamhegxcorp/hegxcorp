import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";

// Authentic client brand logos matching our documented portfolio and case studies
const clientLogos: LogoItem[] = [
  {
    src: "/case-studies/orra/orra-logo.png",
    alt: "Orra Fine Jewellery",
    title: "Orra Fine Jewellery",
    href: "/case-studies/orra",
  },
  {
    src: "/case-studies/nivesh/nivesh-logo.png",
    alt: "Nivesh Wealth Platform",
    title: "Nivesh Wealth Platform",
    href: "/case-studies/nivesh",
  },
  {
    src: "/case-studies/tarkashastra/tarkashastra-logo.png",
    alt: "Tarkashastra Academy",
    title: "Tarkashastra Academy",
    href: "/case-studies/tarkashastra",
  },
  {
    src: "/logos/tbs.png",
    alt: "The Brand Saloon (TBS)",
    title: "The Brand Saloon (TBS)",
  },
  {
    src: "/logos/tnc.png",
    alt: "The News Capital (TNC)",
    title: "The News Capital (TNC)",
  },
  {
    src: "/logos/rollink.svg",
    alt: "Rollink International",
    title: "Rollink",
    href: "/case-studies/rollink",
  },
  {
    src: "/logos/gpen.svg",
    alt: "G Pen Global",
    title: "G Pen",
    href: "/case-studies/g-pen",
  },
  {
    src: "/logos/learning-tree.svg",
    alt: "Learning Tree International",
    title: "Learning Tree International",
    href: "/case-studies/learning-tree",
  },
];

export function ClientLogos() {
  return (
    <section className="border-y border-[#EAEAEA] bg-white py-12 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto max-w-[1280px] px-6 mb-8 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Trusted by market leaders &amp; high-growth enterprises across&nbsp;
          <span className="text-[#FC9C44] font-bold">India, USA, UK &amp; UAE</span>
        </p>
      </div>

      {/* Infinite Smooth React Bits LogoLoop */}
      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
        <LogoLoop
          logos={clientLogos}
          speed={60}
          direction="left"
          logoHeight={44}
          gap={64}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Enterprise client and partner logos"
        />
      </div>
    </section>
  );
}

export default ClientLogos;
