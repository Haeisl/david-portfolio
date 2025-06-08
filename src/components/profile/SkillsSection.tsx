"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import HeadingWithLines from "./HeadingWithLines";

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

/**
 * A responsive skills section that groups self‑assessed competencies by
 * category inside a small, dependency‑free accordion. It scales painlessly to
 * dozens of technologies without overwhelming the reader.
 */
export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  defaultOpen,
}) => {
  const t = useTranslations("Skills");
  // Group skills by category → { category: Skill[] }
  const grouped = useMemo(() => {
    const map: Record<string, Skill[]> = {};
    for (const sk of skills) {
      const cat = sk.category ?? "Other";
      if (!map[cat]) map[cat] = [];
      map[cat].push(sk);
    }
    // Sort each bucket by descending level so strongest skills float to top
    Object.values(map).forEach((arr) => arr.sort((a, b) => b.level - a.level));
    return map;
  }, [skills]);

  const categories = Object.keys(grouped).sort();

  return (
    <section className="py-12">
      <HeadingWithLines title={t("title")} description={t("description")} />
      <div className="mx-auto w-full max-w-lg sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl divide-y divide-textaltlight dark:divide-textaltdark">
        {categories.map((cat) => (
          <AccordionItem
            key={cat}
            title={cat}
            defaultOpen={(defaultOpen ?? categories[0]) === cat}
          >
            <div className="space-y-4">
              {grouped[cat].map((s) => (
                <SkillBar key={s.id} skill={s.name} level={s.level} />
              ))}
            </div>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                             Local Accordion Item                            */
/* -------------------------------------------------------------------------- */

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="py-3">
      <button
        className="flex w-full items-center justify-between text-left text-lg font-medium focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Collapse */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {open && <div className="pt-4">{children}</div>}
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   SkillBar                                 */
/* -------------------------------------------------------------------------- */

interface SkillBarProps {
  skill: string;
  level: number; // 0 to 100
}

function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div>
      <div className="mb-1 flex justify-between">
        <span className="text-md font-medium px-1">{skill}</span>
        {/* <span className="text-xs text-foreground/60">{level}%</span> */}
      </div>
      <div className="h-3 w-full rounded-full bg-bgselectedlight dark:bg-bgselecteddark">
        <div
          className="h-3 rounded-full bg-[var(--color-primary)] transition-all dark:bg-[var(--color-primarydark)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
