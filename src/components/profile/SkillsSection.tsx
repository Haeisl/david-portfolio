"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import HeadingWithLines from "./HeadingWithLines";
import {
  Skill,
  SkillsSectionProps,
  AccordionItemProps,
  SkillBarProps,
} from "@/types";

export default function SkillsSection({
  skills,
  defaultOpen,
}: SkillsSectionProps) {
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
}

/* -------------------------------------------------------------------------- */
/*                             Local Accordion Item                            */
/* -------------------------------------------------------------------------- */
function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className="py-3">
      <button
        className="flex w-full items-center justify-between text-left text-lg font-medium focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Collapse Animation */}
      <motion.div
        animate={{ height }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }} // 👈 longer, smooth transition
        className="overflow-hidden"
      >
        <div ref={contentRef} className="pt-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   SkillBar                                 */
/* -------------------------------------------------------------------------- */

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
