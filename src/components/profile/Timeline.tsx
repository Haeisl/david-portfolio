"use client";
import React, { useMemo } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import HeadingWithLines from "./HeadingWithLines";

export type TimelineItem = {
  id: string;
  /** Displayed as the main heading */
  title: string;
  /** Optional sub‑heading such as school/company name */
  subtitle?: string;
  /** ISO date string – first day of period */
  start: string;
  /** ISO date string – last day of period; omit for ongoing roles */
  end?: string;
  /** Short free‑form description */
  description?: string;
  /** Determines colour/icon */
  type: "education" | "work";
};

type TimelineProps = {
  items: TimelineItem[];
  /** "vertical" (default) | "horizontal" */
  orientation?: "vertical" | "horizontal";
};

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const t = useTranslations("Timeline");

  const sorted = useMemo(
    () =>
      [...items].sort(
        (a, b) =>
          new Date(b.end ?? b.start).getTime() -
          new Date(a.end ?? a.start).getTime()
      ),
    [items]
  );

  return (
    <HorizontalTimeline
      items={sorted}
      title={t("title")}
      description={t("description")}
    />
  );
};

const HorizontalTimeline: React.FC<{
  items: TimelineItem[];
  title: string;
  description: string;
}> = ({ items, title, description }) => (
  <>
    <HeadingWithLines title={title} description={description} />
    <div className="relative overflow-x-auto scroll-smooth pb-4">
      {/* Extra padding on the left ensures the first item isn’t chopped on tiny screens */}
      <div className="flex justify-center items-start space-x-12 px-128 md:px-2 py-2 snap-x snap-mandatory">
        {items.map((item, idx) => (
          <HorizontalItem
            key={item.id}
            item={item}
            isLast={idx === items.length - 1}
          />
        ))}
      </div>
    </div>
  </>
);

const HorizontalItem: React.FC<{ item: TimelineItem; isLast: boolean }> = ({
  item,
  isLast,
}) => {
  const t = useTranslations("Timeline");
  const locale = useLocale();
  const Icon = item.type === "education" ? GraduationCap : Briefcase;

  const localeMap: Record<string, string> = {
    en: "en-US",
    de: "de-DE",
  };

  const formattedLocale = localeMap[locale] ?? "en-US";

  return (
    <div className="relative flex min-w-[12rem] flex-col items-center snap-start">
      {/* connector */}
      {!isLast && (
        <div
          className="absolute right-[-7.7rem] top-6 h-px w-[12.5rem] bg-textaltlight/40 dark:bg-textaltdark/40"
          aria-hidden="true"
        />
      )}

      {/* dot with icon */}
      <span
        className="flex h-9 w-9 items-center justify-center my-2 mx-24 rounded-full text-textlight bg-[var(--color-primary)] ring-4 ring-[var(--color-primary)]/20 dark:bg-[var(--color-primarydark)] dark:ring-[var(--color-primarydark)]/20"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </span>

      {/* card */}
      <div className="mt-4 w-56 shrink-0 rounded-lg border p-4 shadow-md">
        <div className="flex items-center space-x-1">
          <h3 className="font-medium">{item.title}</h3>
        </div>
        {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
        <p className="text-sm">
          {fmtDate(item.start, formattedLocale)}
          {item.end
            ? ` – ${fmtDate(item.end, formattedLocale)}`
            : ` – ${t("present")}`}
        </p>
        {item.description && <p className="mt-1 text-sm">{item.description}</p>}
      </div>
    </div>
  );
};

// Helper function to format date strings
function fmtDate(input: string, locale: string = "en-US") {
  // Accepts YYYY | YYYY-MM | full ISO – falls back to raw string if parse fails.
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return input;

  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
  });
}
