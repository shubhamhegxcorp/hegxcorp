import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

type ServiceContactCTAProps = {
  eyebrow: string;
  title: string;
  description: string;
  serviceName: string;
  primaryLabel: string;
};

const contactPromises = [
  "Response within 24 hours",
  "Free strategy consultation",
  "No-obligation growth assessment",
];

const nextSteps = [
  ["01", "Review", "We review your service goals, website, and current growth channels."],
  ["02", "Strategy Call", "We schedule a short consultation to understand priorities."],
  ["03", "Growth Roadmap", "You get a clear action plan with practical next steps."],
];

export function ServiceContactCTA({
  eyebrow,
  title,
  description,
  serviceName,
  primaryLabel,
}: ServiceContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.24), transparent 30%), radial-gradient(circle at 88% 18%, rgba(79,111,255,0.18), transparent 32%), linear-gradient(135deg, #050B24 0%, #081640 52%, #06133D 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
            <Sparkles size={14} strokeWidth={2} />
            {eyebrow}
          </p>

          <h2
            className="max-w-3xl font-black leading-[1.04]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(38px, 4.8vw, 70px)",
            }}
          >
            {title}
          </h2>

          <p
            className="mt-6 max-w-2xl text-white/72"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.15vw, 18px)",
              lineHeight: 1.75,
            }}
          >
            {description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {contactPromises.map((promise) => (
              <div
                key={promise}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FC9C44]" />
                <span className="text-xs font-bold uppercase leading-5 tracking-[0.08em] text-white/72">
                  {promise}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]"
            >
              {primaryLabel}
              <Send size={16} strokeWidth={2} />
            </a>

            <a
              href="tel:+918369207836"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12"
            >
              Call Now
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.72, delay: 0.08, ease: "easeOut" }}
          className="rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          <div className="rounded-[22px] border border-white/10 bg-[#071333]/92 p-6">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]">
                  Priority Growth Request
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">Talk to Hegxcorp</h3>
              </div>

              <span className="rounded-full bg-[#FC9C44]/16 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#FC9C44]">
                Fast reply
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+918369207836"
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#FC9C44]/60 hover:bg-white/[0.09]"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#FC9C44] transition group-hover:bg-[#FC9C44] group-hover:text-white">
                  <Phone size={18} strokeWidth={2} />
                </span>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-white/44">
                  Direct Hotline
                </span>
                <span className="mt-2 block text-sm font-bold text-white">+91 836 920 7836</span>
              </a>

              <a
                href="mailto:hegxcorp@gmail.com"
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#FC9C44]/60 hover:bg-white/[0.09]"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#FC9C44] transition group-hover:bg-[#FC9C44] group-hover:text-white">
                  <Mail size={18} strokeWidth={2} />
                </span>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-white/44">
                  Inquiries
                </span>
                <span className="mt-2 block text-sm font-bold text-white">hegxcorp@gmail.com</span>
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="mb-3 flex items-center gap-3 text-[#FC9C44]">
                <MapPin size={18} strokeWidth={2} />
                <span className="text-xs font-bold uppercase tracking-[0.12em]">Mumbai Office</span>
              </div>
              <p className="text-sm leading-7 text-white/68">
                10th Floor Building 4, Nesco IT Park, Western Express Highway, Goregaon (East)
                Mumbai, Maharashtra 400063
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]">
                <span className="text-white/52">Selected Focus</span>
                <span className="text-[#FC9C44]">{serviceName}</span>
              </div>

              <div className="grid gap-3">
                {nextSteps.map(([step, label, copy]) => (
                  <div
                    key={step}
                    className="grid grid-cols-[40px_1fr] gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FC9C44] text-xs font-black text-white">
                      {step}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">{label}</span>
                      <span className="mt-1 block text-xs leading-5 text-white/54">{copy}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
