import { ReactNode } from "react";

export type NavigationType = {
  name: string;
  href: string;
};

export type HeadingWithLinesProps = {
  title: string;
  description?: string;
};

export type TimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  start: string;
  end?: string;
  description?: string;
  type: "education" | "work";
};

export type TimelineProps = {
  items: TimelineItem[];
  orientation?: "vertical" | "horizontal";
};

export type Word = {
  title: string;
};

export type Skill = {
  id: string;
  name: string;
  level: number; // 0 – 100
  category: string; // e.g. "Frontend", "Backend", "DevOps" …
};

export type SkillsSectionProps = {
  skills: Skill[];
  /** Category accordion will default‑open the first entry */
  defaultOpen?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export enum ProjectType {
  THESIS = "thesis",
  PRACTICAL = "practical",
  PRIVATE = "private",
}

export type ProjectLayoutProps = {
  title?: string;
  summary: ReactNode;
  type?: ProjectType;
  category?: string;
  stack?: string[];
  githubUrl?: string[];
  githubNames?: string[];
  problemTitle: string;
  problem: string[];
  approachTitle: string;
  approach: string[];
  galleryTitle: string;
  images?: ProjectImage[];
};

export type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export type SkillBarProps = {
  skill: string;
  level: number; // 0 to 100
};

export type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export type ThisOrThatPair = {
  left: string;
  right: string;
  preferred: "left" | "right";
  explanation: string;
};

export type ProjectCardProps = {
  id: string;
  type: "thesis" | "practical" | "private";
  techStack: string[];
  imageUrl?: string;
};

export type TFunction = (key: string) => string;
