import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Phone, Mail, MapPin, Globe, Sparkles, Send, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import ShapeGrid from "@/components/ShapeGrid";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Our Growth Consulting Team | Hegxcorp" },
      {
        name: "description",
        content:
          "Get in touch with Hegxcorp's digital transformation consultants. Let's discuss your growth targets, SEO opportunities, and ad performance audit.",
      },
      { property: "og:title", content: "Contact Hegxcorp | Enterprise Growth Partners" },
      {
        property: "og:description",
        content:
          "Connect with us to schedule a strategy call or request a detailed SEO and marketing audit.",
      },
    ],
  }),
  component: ContactPage,
} as never);

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Contact form submitted:", data);
    toast.success("Message sent successfully! Our growth strategists will contact you shortly.");
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <Toaster position="top-right" richColors />

        <section className="py-20 bg-white relative overflow-hidden">
          {/* Hexagon background motif (same as homepage) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none"
            style={{ opacity: 0.2 }}
          >
            <ShapeGrid
              shape="hexagon"
              squareSize={38}
              borderColor="rgba(29,39,66,0.3)"
              hoverFillColor="transparent"
              hoverTrailAmount={0}
              staticMode={false}
              speed={0.2}
              className="w-full h-full"
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

              {/* Left side — Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <SectionHeading
                    tagline="Connect With Us"
                    heading="Let's Talk About Growth"
                    description="Whether you're looking to scale organic traffic, improve paid advertising performance, or build a high-converting website, our team is ready to help you identify the fastest path forward."
                  />

                  {/* Trust Indicators */}
                  <div
                    className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-[#4A5568] border-b border-[#EAEAEA]/80 pb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">Free strategy consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">No-obligation growth assessment</span>
                    </div>
                  </div>
                </div>

                {/* Contact Channels */}
                <div className="space-y-6">
                  {/* Hotline */}
                  <a
                    href="tel:+918369207836"
                    className="group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Direct Hotline
                      </span>
                      <span
                        className="text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        +91 836 920 7836
                      </span>
                    </div>
                  </a>

                  {/* Inquiries Email */}
                  <a
                    href="mailto:hegxcorp@gmail.com"
                    className="group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Inquiries
                      </span>
                      <span
                        className="text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        hegxcorp@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Global Hubs */}
                  <div
                    className="group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        ADDRESS
                      </span>
                      <p
                        className="text-sm text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300 leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        10th Floor Building 4, Nesco IT Park, Western Express Highway, Goregaon (East) Mumbai, Maharashtra 400063
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Vertical Process Timeline */}
                <div className="space-y-6 pt-8 border-t border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-[#FC9C44]">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      What to expect next
                    </span>
                  </div>

                  <div className="relative pl-8 space-y-8">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-[#EAEAEA]" />

                    {/* Step 1 */}
                    <div className="relative flex items-start gap-4">
                      {/* Circle Pin */}
                      <div className="absolute -left-[30px] flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#EAEAEA] text-[10px] font-bold text-[#FC9C44] shadow-sm select-none">
                        01
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          Review
                        </h4>
                        <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          A consultant reviews your website and growth channels.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start gap-4">
                      {/* Circle Pin */}
                      <div className="absolute -left-[30px] flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#EAEAEA] text-[10px] font-bold text-[#FC9C44] shadow-sm select-none">
                        02
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          Strategy Call
                        </h4>
                        <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          We schedule a short consultation to understand goals.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start gap-4">
                      {/* Circle Pin */}
                      <div className="absolute -left-[30px] flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#EAEAEA] text-[10px] font-bold text-[#FC9C44] shadow-sm select-none">
                        03
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          Growth Roadmap
                        </h4>
                        <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          We provide a prioritized action plan with recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side — Form Container */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="rounded-2xl border border-[#EAEAEA] bg-white p-8 lg:p-10 shadow-[0_16px_40px_-20px_rgba(29,39,66,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <h3
                  className="text-lg font-bold text-[#232323] mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Send a secure message
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h4
                      className="text-base font-bold text-[#232323]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Thank you! Message Received
                    </h4>
                    <p
                      className="text-sm text-[#6B7280] leading-relaxed max-w-[340px] mx-auto"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      We've logged your request. One of our growth advisors will reach out to you via
                      email within the next business day.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-[#FC9C44] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="e.g. Priya Sharma"
                        {...register("name")}
                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#EAEAEA] focus:border-[#FC9C44]"
                          }`}
                      />
                      {errors.name && (
                        <p
                          className="text-xs text-red-500 font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="e.g. priya@retailbrand.in"
                        {...register("email")}
                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#EAEAEA] focus:border-[#FC9C44]"
                          }`}
                      />
                      {errors.email && (
                        <p
                          className="text-xs text-red-500 font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Message field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your digital platforms, your timeline, and your specific growth targets..."
                        {...register("message")}
                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] resize-none ${errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#EAEAEA] focus:border-[#FC9C44]"
                          }`}
                      />
                      {errors.message && (
                        <p
                          className="text-xs text-red-500 font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
