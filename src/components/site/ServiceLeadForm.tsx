import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import * as z from "zod";

import { getVisitorId, trackLead } from "@/lib/analytics";
import { submitContactInquiry } from "@/lib/contact-inquiries";

const leadFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(7, { message: "Please enter your phone number" }),
  website: z.string().optional(),
  budget: z.string().min(1, { message: "Please select a budget" }),
  timeline: z.string().min(1, { message: "Please select a timeline" }),
  message: z.string().min(12, { message: "Please add a little more detail" }),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

type ServiceLeadFormProps = {
  eyebrow: string;
  title: string;
  description: string;
  serviceName: string;
  focusOptions: string[];
};

const fieldClass =
  "w-full border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#232323] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#FC9C44]";

const errorClass = "mt-1 text-xs font-semibold text-red-500";

export function ServiceLeadForm({
  eyebrow,
  title,
  description,
  serviceName,
  focusOptions,
}: ServiceLeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const serviceId = serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      budget: "",
      timeline: "",
      message: `I am interested in ${serviceName}.`,
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    try {
      await submitContactInquiry({
        data: {
          ...data,
          visitorId: getVisitorId(),
          source: `${serviceName} service page`,
          services: [serviceName],
        },
      });
      trackLead({
        form_name: "service_lead_form",
        service_name: serviceName,
        lead_source: `${serviceName} service page`,
        budget: data.budget,
        timeline: data.timeline,
      });
      toast.success(`${serviceName} inquiry saved. Hegxcorp will contact you shortly.`);
      setIsSubmitted(true);
      reset({
        budget: "",
        timeline: "",
        message: `I am interested in ${serviceName}.`,
      });
    } catch (error) {
      console.error(`${serviceName} lead form failed:`, error);
      toast.error("We could not save your request. Please try again.");
    }
  };

  return (
    <section className="border-y border-[#EAEAEA] bg-[#FAFAF8] px-6 py-24 lg:px-10">
      <Toaster position="top-right" richColors />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:sticky lg:top-28"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
            <Sparkles size={15} strokeWidth={2} />
            {eyebrow}
          </p>
          <h2
            className="text-[#06133D] font-black leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.5vw, 62px)",
            }}
          >
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5F6B7A]">{description}</p>

          {focusOptions.length > 0 && (
            <div className="mt-9 grid gap-3">
              {focusOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-start gap-3 border border-[#E5E7EB] bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FC9C44]" />
                  <span className="text-sm font-bold leading-6 text-[#06133D]">{option}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_70px_-46px_rgba(6,19,61,0.5)] sm:p-8"
        >
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#FC9C44]">
                Priority Inquiry
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#06133D]">
                Request {serviceName} support
              </h3>
            </div>
            <span className="hidden bg-[#FFF4E8] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#FC9C44] sm:inline-flex">
              Fast reply
            </span>
          </div>

          {isSubmitted ? (
            <div className="grid min-h-[420px] place-items-center text-center">
              <div>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44]">
                  <Mail size={25} strokeWidth={2} />
                </div>
                <h4 className="text-2xl font-black text-[#06133D]">Message received</h4>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#5F6B7A]">
                  Your {serviceName.toLowerCase()} inquiry is logged. Hegxcorp will review it and
                  respond with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-black text-[#FC9C44] hover:text-[#E88C35]"
                >
                  Send another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${serviceId}-name`}
                    className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]"
                  >
                    Full name
                  </label>
                  <input
                    id={`${serviceId}-name`}
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    className={`${fieldClass} ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor={`${serviceId}-phone`}
                    className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]"
                  >
                    Phone
                  </label>
                  <input
                    id={`${serviceId}-phone`}
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className={`${fieldClass} ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${serviceId}-email`}
                    className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]"
                  >
                    Business email
                  </label>
                  <input
                    id={`${serviceId}-email`}
                    type="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className={`${fieldClass} ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor={`${serviceId}-website`}
                    className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]"
                  >
                    Website
                  </label>
                  <input
                    id={`${serviceId}-website`}
                    type="text"
                    placeholder="https://yourwebsite.com"
                    {...register("website")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${serviceId}-budget`}
                    className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]"
                  >
                    Monthly budget
                  </label>
                  <select
                    id={`${serviceId}-budget`}
                    {...register("budget")}
                    className={`${fieldClass} ${errors.budget ? "border-red-500" : ""}`}
                  >
                    <option value="">Select budget</option>
                    <option value="Under Rs. 25,000">Under Rs. 25,000</option>
                    <option value="Rs. 25,000 - Rs. 50,000">Rs. 25,000 - Rs. 50,000</option>
                    <option value="Rs. 50,000 - Rs. 1,00,000">Rs. 50,000 - Rs. 1,00,000</option>
                    <option value="Above Rs. 1,00,000">Above Rs. 1,00,000</option>
                  </select>
                  {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor={`${serviceId}-timeline`}
                    className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]"
                  >
                    Timeline
                  </label>
                  <select
                    id={`${serviceId}-timeline`}
                    {...register("timeline")}
                    className={`${fieldClass} ${errors.timeline ? "border-red-500" : ""}`}
                  >
                    <option value="">Select timeline</option>
                    <option value="Urgent">Urgent</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="This month">This month</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                  {errors.timeline && <p className={errorClass}>{errors.timeline.message}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor={`${serviceId}-message`}
                  className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]"
                >
                  What do you want to improve?
                </label>
                <textarea
                  id={`${serviceId}-message`}
                  rows={5}
                  placeholder="Share your current challenge, goal, target locations, competitors, or growth priority."
                  {...register("message")}
                  className={`${fieldClass} resize-none ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && <p className={errorClass}>{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 bg-[#FC9C44] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#E88C35] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending request...
                  </>
                ) : (
                  <>
                    Send {serviceName} request
                    <Send size={16} strokeWidth={2} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
