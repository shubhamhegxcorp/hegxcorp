import { caseStudies, CaseStudy } from "@/data/caseStudies";

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return caseStudies.find((c) => c.slug === slug) ?? null;
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  if (!industry || industry.toLowerCase() === "all") {
    return caseStudies;
  }
  return caseStudies.filter((c) => c.industry.toLowerCase() === industry.toLowerCase());
}
