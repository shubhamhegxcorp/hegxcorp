import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Phone, Mail, MapPin, Globe, Sparkles, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "sonner";
import { useState } from "react";

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
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster position="top-right" richColors />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Left side — Contact Info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <SectionHeading
                  tagline="Connect With Us"
                  heading="Partner with a growth consultancy that values outcomes"
                  description="Whether you're looking to scale organic traffic, optimize paid ads yield, or rebuild a high-performance site, our strategists are here to outline a custom roadmap."
                />
              </div>

              {/* Contact Channels */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span
                      className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Direct Hotline
                    </span>
                    <a
                      href="tel:+91 836 920 7836"
                      className="text-sm font-semibold text-[#232323] hover:text-[#FC9C44] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      +91 836 920 7836
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span
                      className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Inquiries
                    </span>
                    <a
                      href="mailto:growth@hegxcorp.com"
                      className="text-sm font-semibold text-[#232323] hover:text-[#FC9C44] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      growth@hegxcorp.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span
                      className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Global Hubs
                    </span>
                    <p
                      className="text-sm text-[#232323] leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Bangalore, India • San Francisco, USA • London, UK • Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>

              {/* Brief Trust Indicator Card */}
              <div className="rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#FC9C44]">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    What to expect next
                  </span>
                </div>
                <ul
                  className="space-y-2.5 text-xs text-[#6B7280]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <li className="flex gap-2">
                    <span className="text-[#FC9C44] font-bold">1.</span>
                    <span>A dedicated consultant reviews your website and channels.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FC9C44] font-bold">2.</span>
                    <span>We schedule a brief 15-minute briefing session.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FC9C44] font-bold">3.</span>
                    <span>We present a prioritized 90-day action plan.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side — Form Container */}
            <div className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-8 lg:p-10 shadow-[0_16px_40px_-20px_rgba(29,39,66,0.06)]">
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
