export type Theme = "dark" | "light";

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  glowColor: "blue" | "purple" | "cyan";
  details: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details: string;
  status: "completed" | "active" | "planned";
}

export interface StatItem {
  targetValue: number;
  decimals?: number;
  suffix: string;
  label: string;
  description: string;
  color: "blue" | "purple" | "cyan" | "pink";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarSeed: string;
}

export interface TechItem {
  name: string;
  category: string;
  level: number; // 1-100 indicating tech integration readiness
  description: string;
  status: string;
}
