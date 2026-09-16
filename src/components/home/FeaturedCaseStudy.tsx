import { ArrowRight, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const results = [
  { label: "Organic Search Traffic", value: "+200%", period: "In 40 Days" },
  { label: "Inbound Phone Inquiries", value: "1,151", period: "+260% Growth" },
  { label: "Verified Form Submissions", value: "153", period: "30x Increase" },
  { label: "Avg. Google Ads CPC", value: "₹54.08", period: "908+ Call Leads" },
];

export function FeaturedCaseStudy() {
  return (
    <section
      className="bg-[#1D2742] overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Scroll Reveal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EBB771]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Featured Client Case Study
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-8 items-start">
            {/* Left — story */}
            <div className="space-y-8">
              <h2
                className="font-bold text-white leading-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                }}
              >
                How we generated 1,151+ calls and scaled organic traffic to 200% in 40 days for Tarkashastra Academy
              </h2>


              {/* Testimonial Quote */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Quote className="h-5 w-5 text-[#EBB771] mb-3" />
                <p
                  className="text-white/85 text-sm leading-relaxed italic mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "Hegxcorp completely transformed our digital funnel. They didn't just give us traffic;
                  they engineered high-quality student inquiries that translated into actual classroom
                  admissions within weeks."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/case-studies/tarkashastra/aditya-thakare-founder.png"
                    alt="Aditya Thakare"
                    className="h-10 w-10 rounded-full object-cover border border-[#EBB771]/30"
                  />
                  <div>
                    <div
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Aditya Thakare
                    </div>
                    <div className="text-xs text-white/50">
                      Founder & Lead Mentor, Tarkashastra Academy (Ex-J.P. Morgan Chase | 99.9%ile CAT QA & DILR)
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Scale on Hover */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: "tarkashastra" }}
                  className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35] transition-colors"
                >
                  View Full Case Study <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right — results */}
            <div className="space-y-4">
              {results.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                >
                  <div>
                    <div
                      className="text-xs text-white/50 mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {r.label}
                    </div>
                    <div
                      className="text-[38px] md:text-[42px] font-black text-white leading-none"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {r.value}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-xs text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Timeframe
                    </div>
                    <div
                      className="text-sm font-semibold text-[#EBB771] mt-0.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {r.period}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Industry tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "CAT & MBA CET",
                  "IPMAT & CLAT",
                  "SEO Architecture",
                  "Local SEO (GBP)",
                  "Google Ads (₹54 CPC)",
                  "Pune",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
