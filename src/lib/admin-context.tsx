import { createContext, useContext } from "react";

import type { ContactInquiry, InquiryStatus } from "@/lib/contact-inquiries";
import type { GrowthAuditInquiry } from "@/lib/growth-audit-inquiries";

export type AdminContextValue = {
  inquiries: ContactInquiry[];
  growthAuditInquiries: GrowthAuditInquiry[];
  isLoading: boolean;
  error: string;
  updatingId: string;
  handleStatusChange: (id: string, status: InquiryStatus) => Promise<void>;
  handleGrowthAuditStatusChange: (id: string, status: InquiryStatus) => Promise<void>;
  loadInquiries: () => Promise<void>;
};

export const AdminContext = createContext<AdminContextValue | null>(null);

export function useAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used inside the /admin layout route.");
  }
  return context;
}
