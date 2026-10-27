import { portfolio } from "@/lib/content";

export const PORTFOLIO_CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "web-development", label: "Web Development" },
  { key: "mobile-apps", label: "Mobile Apps & Digital Products" },
  { key: "ui-ux-product-design", label: "UI/UX & Product Design" },
  { key: "branding-graphic-design", label: "Branding & Graphic Design" },
  { key: "social-media-marketing-design", label: "Social Media & Marketing Design" },
] as const;

export type PortfolioCategoryKey = (typeof PORTFOLIO_CATEGORIES)[number]["key"];

export const CATEGORY_KEY_BY_LABEL: Record<string, PortfolioCategoryKey> = {
  "UI/UX & Product Design": "ui-ux-product-design",
  "Web Development": "web-development",
  "Mobile Apps & Digital Products": "mobile-apps",
  "Branding & Graphic Design": "branding-graphic-design",
  "Social Media & Marketing Design": "social-media-marketing-design",
};

export const FILTER_CATEGORY_KEYS = PORTFOLIO_CATEGORIES.map((category) => category.key).filter(
  (key) => key !== "all",
);

export function parsePortfolioCategory(search: string): PortfolioCategoryKey {
  const value = new URLSearchParams(search).get("category");
  if (value && PORTFOLIO_CATEGORIES.some((category) => category.key === value)) {
    return value as PortfolioCategoryKey;
  }
  return "all";
}

export function filterPortfolio(key: PortfolioCategoryKey) {
  return key === "all"
    ? portfolio
    : portfolio.filter((project) => CATEGORY_KEY_BY_LABEL[project.category] === key);
}
