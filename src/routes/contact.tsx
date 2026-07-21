import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Phone, Mail, MapPin, Sparkles, Send, Check, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "sonner";
import { type ClipboardEvent, type KeyboardEvent, type WheelEvent, useEffect, useRef, useState } from "react";
import ShapeGrid from "@/components/ShapeGrid";
import { motion } from "framer-motion";

import { submitContactInquiry } from "@/lib/contact-inquiries";

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

const serviceGroups = [
  {
    title: "Development",
    services: [
      { name: "Web Development", desc: "Scalable, modern websites" },
      { name: "Custom Web Applications", desc: "Tailored platforms" },
      { name: "WordPress Development", desc: "Premium WP builds" },
      { name: "Ecommerce Development", desc: "Stores that convert" },
    ],
  },
  {
    title: "Marketing",
    services: [
      { name: "SEO", desc: "Rank where it matters" },
      { name: "PPC", desc: "Performance ad campaigns" },
      { name: "Social Media Marketing", desc: "Engage and grow" },
      { name: "Content Marketing", desc: "Stories that scale" },
    ],
  },
  {
    title: "Design",
    services: [
      { name: "UI/UX Design", desc: "Human-centered design" },
      { name: "Branding", desc: "Identities with intent" },
      { name: "Graphic Design", desc: "Visual storytelling" },
    ],
  },
];

const fullNamePattern = /^[A-Za-z\s]+$/;
const fullNameCharacterPattern = /^[A-Za-z\s]$/;
const phoneNumberPattern = /^\d+$/;
const phoneNumberCharacterPattern = /^\d$/;
const defaultPhoneCountryCode = "+91";

function blockInvalidNameKey(
  event: KeyboardEvent<HTMLInputElement>,
  onInvalidInput: () => void,
) {
  if (event.key.length === 1 && !fullNameCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}

function blockInvalidNamePaste(
  event: ClipboardEvent<HTMLInputElement>,
  onInvalidInput: () => void,
) {
  const pastedText = event.clipboardData.getData("text");

  if (!fullNamePattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}

function blockInvalidPhoneKey(
  event: KeyboardEvent<HTMLInputElement>,
  onInvalidInput: () => void,
) {
  if (event.key.length === 1 && !phoneNumberCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}

function blockInvalidPhonePaste(
  event: ClipboardEvent<HTMLInputElement>,
  onInvalidInput: () => void,
) {
  const pastedText = event.clipboardData.getData("text");

  if (!phoneNumberPattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name" })
    .min(2, { message: "Name must be at least 2 characters" })
    .regex(fullNamePattern, { message: "Please enter alphabets only" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Please enter your number" })
    .regex(phoneNumberPattern, { message: "Please enter digits only" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  budget: z.string().min(1, { message: "Please select a budget" }),
  timeline: z.string().min(1, { message: "Please select a timeline" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      services: [],
      budget: "",
      timeline: "",
    },
  });

  const selectedServices = watch("services") || [];

  useEffect(() => {
    if (!isServiceOpen) return;

    function closeServiceDropdown(event: MouseEvent | TouchEvent) {
      if (!serviceDropdownRef.current?.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    }

    document.addEventListener("mousedown", closeServiceDropdown);
    document.addEventListener("touchstart", closeServiceDropdown);

    return () => {
      document.removeEventListener("mousedown", closeServiceDropdown);
      document.removeEventListener("touchstart", closeServiceDropdown);
    };
  }, [isServiceOpen]);

  function handleServiceDropdownWheel(event: WheelEvent<HTMLDivElement>) {
    const dropdown = event.currentTarget;

    if (dropdown.scrollHeight <= dropdown.clientHeight) return;

    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    dropdown.scrollTop += event.deltaY;
  }

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitContactInquiry({
        data: {
          ...data,
          phone: `${defaultPhoneCountryCode} ${data.phone}`,
          source: "Contact page",
        },
      });
      toast.success("Message saved successfully! Our growth strategists will contact you shortly.");
      setIsSubmitted(true);
      setIsServiceOpen(false);
      reset();
    } catch (error) {
      console.error("Contact form failed:", error);
      toast.error("We could not save your message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <Toaster position="top-right" richColors />

        <section className="py-20 bg-white relative overflow-hidden">
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

                  <div
                    className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-[#4A5568] border-b border-[#EAEAEA]/80 pb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <div className="flex items-center gap-10">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-10">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">Free strategy consultation</span>
                    </div>
                    <div className="flex items-center gap-10">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">No-obligation growth assessment</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
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

                  <div className="group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1">
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

                <div className="space-y-6 pt-8 border-t border-[#EAEAEA]">
                  {/* <div className="flex items-center gap-2 text-[#FC9C44]">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      What to expect next
                    </span>
                  </div> */}

                  <div className="relative pl-8 space-y-8">
                    <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-[#EAEAEA]" />

                    {/* {[
                      ["01", "Review", "A consultant reviews your website and growth channels."],
                      ["02", "Strategy Call", "We schedule a short consultation to understand goals."],
                      ["03", "Growth Roadmap", "We provide a prioritized action plan with recommendations."],
                    ].map(([step, title, desc]) => (
                      <div key={step} className="relative flex items-start gap-4">
                        <div className="absolute -left-[30px] flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#EAEAEA] text-[10px] font-bold text-[#FC9C44] shadow-sm select-none">
                          {step}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {title}
                          </h4>
                          <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))} */}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="group/form rounded-2xl border border-[#EAEAEA] bg-white p-8 lg:p-10 shadow-[0_16px_40px_-20px_rgba(29,39,66,0.06)] hover:shadow-[0_24px_70px_rgba(252,156,68,0.16)] hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3
                    className="text-lg font-bold text-[#232323]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Send a secure message
                  </h3>
                  <span className="rounded-full bg-[#FFF4E8] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FC9C44] opacity-0 transition-opacity duration-300 group-hover/form:opacity-100">
                    Fast reply
                  </span>
                </div>

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
                    <div className="grid sm:grid-cols-2 gap-4">
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
                          {...register("name", { onChange: () => clearErrors("name") })}
                          onKeyDown={(event) =>
                            blockInvalidNameKey(event, () =>
                              setError("name", {
                                type: "manual",
                                message: "Please enter alphabets only",
                              }),
                            )
                          }
                          onPaste={(event) =>
                            blockInvalidNamePaste(event, () =>
                              setError("name", {
                                type: "manual",
                                message: "Please enter alphabets only",
                              }),
                            )
                          }
                          className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.name ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"
                            }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Phone Number
                        </label>
                        <div
                          className={`flex overflow-hidden rounded-lg border bg-white transition-all focus-within:border-[#FC9C44] ${errors.phone ? "border-red-500 focus-within:border-red-500" : "border-[#EAEAEA]"
                            }`}
                        >
                          <span className="inline-flex items-center border-r border-[#EAEAEA] bg-[#F9FAFB] px-4 text-sm font-bold text-[#06133D]">
                            {defaultPhoneCountryCode}
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            inputMode="numeric"
                            placeholder="9876543210"
                            {...register("phone", { onChange: () => clearErrors("phone") })}
                            onKeyDown={(event) =>
                              blockInvalidPhoneKey(event, () =>
                                setError("phone", {
                                  type: "manual",
                                  message: "Please enter digits only",
                                }),
                              )
                            }
                            onPaste={(event) =>
                              blockInvalidPhonePaste(event, () =>
                                setError("phone", {
                                  type: "manual",
                                  message: "Please enter digits only",
                                }),
                              )
                            }
                            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#232323] outline-none placeholder:text-[#9CA3AF] placeholder:opacity-50"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

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
                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.email ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"
                          }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Services Required
                      </label>
                      <div ref={serviceDropdownRef} className="relative">
                        <button
                          type="button"
                          onClick={() => setIsServiceOpen((value) => !value)}
                          className={`flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-left text-sm outline-none transition-all ${errors.services ? "border-red-500" : "border-[#EAEAEA] hover:border-[#FC9C44]"
                            }`}
                        >
                          <span className={selectedServices.length ? "font-semibold text-[#232323]" : "text-[#9CA3AF]"}>
                            {selectedServices.length
                              ? `${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""} selected`
                              : "Choose one or more services"}
                          </span>
                          <ChevronDown className={`h-4 w-4 text-[#FC9C44] transition-transform ${isServiceOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isServiceOpen && (
                          <div
                            onWheel={handleServiceDropdownWheel}
                            className="absolute left-0 right-0 z-30 mt-2 max-h-[190px] overflow-y-scroll overscroll-contain rounded-xl border border-[#EAEAEA] bg-white p-4 pr-2 shadow-[0_22px_60px_rgba(29,39,66,0.14)] [scrollbar-gutter:stable] sm:max-h-[210px]"
                          >
                            <div className="grid gap-4 pr-2 md:grid-cols-3">
                              {serviceGroups.map((group) => (
                                <div key={group.title} className="space-y-2">
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]">
                                    {group.title}
                                  </p>
                                  {group.services.map((service) => (
                                    <label
                                      key={service.name}
                                      className="flex cursor-pointer gap-3 rounded-lg p-2 transition-colors hover:bg-[#FFF4E8]"
                                    >
                                      <input
                                        type="checkbox"
                                        value={service.name}
                                        {...register("services")}
                                        className="mt-1 h-4 w-4 accent-[#FC9C44]"
                                      />
                                      <span>
                                        <span className="block text-sm font-bold text-[#232323]">{service.name}</span>
                                        <span className="block text-xs text-[#6B7280]">{service.desc}</span>
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {selectedServices.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedServices.map((service) => (
                            <span
                              key={service}
                              className="rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#FC9C44]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                      {errors.services && (
                        <p className="text-xs text-red-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {errors.services.message}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="budget"
                          className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Budget
                        </label>
                        <select
                          id="budget"
                          {...register("budget")}
                          className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all ${errors.budget ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"
                            }`}
                        >
                          <option value="">Select budget</option>
                          <option value="Under Rs. 25,000">Under Rs. 25,000</option>
                          <option value="Rs. 25,000 - Rs. 50,000">Rs. 25,000 - Rs. 50,000</option>
                          <option value="Rs. 50,000 - Rs. 1,00,000">Rs. 50,000 - Rs. 1,00,000</option>
                          <option value="Above Rs. 1,00,000">Above Rs. 1,00,000</option>
                        </select>
                        {errors.budget && (
                          <p className="text-xs text-red-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {errors.budget.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="timeline"
                          className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          {...register("timeline")}
                          className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all ${errors.timeline ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"
                            }`}
                        >
                          <option value="">Select timeline</option>
                          <option value="Urgent">Urgent</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="1 month">1 month</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                        {errors.timeline && (
                          <p className="text-xs text-red-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {errors.timeline.message}
                          </p>
                        )}
                      </div>
                    </div>

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
                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"
                          }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* <div className="grid gap-3 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] p-3 transition-all duration-300 group-hover/form:border-[#FC9C44]/40 group-hover/form:bg-[#FFF9F3] sm:grid-cols-3">
                      <a href="tel:+918369207836" className="group/item rounded-lg p-3 transition-colors hover:bg-white">
                        <Phone className="mb-2 h-4 w-4 text-[#FC9C44]" />
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Direct Hotline</span>
                        <span className="block text-xs font-bold text-[#232323] group-hover/item:text-[#FC9C44]">+91 836 920 7836</span>
                      </a>
                      <a href="mailto:hegxcorp@gmail.com" className="group/item rounded-lg p-3 transition-colors hover:bg-white">
                        <Mail className="mb-2 h-4 w-4 text-[#FC9C44]" />
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Inquiries</span>
                        <span className="block break-all text-xs font-bold text-[#232323] group-hover/item:text-[#FC9C44]">hegxcorp@gmail.com</span>
                      </a>
                      <div className="group/item rounded-lg p-3 transition-colors hover:bg-white">
                        <MapPin className="mb-2 h-4 w-4 text-[#FC9C44]" />
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Address</span>
                        <span className="block text-xs font-bold leading-relaxed text-[#232323] group-hover/item:text-[#FC9C44]">Goregaon East, Mumbai</span>
                      </div>
                    </div> */}

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
