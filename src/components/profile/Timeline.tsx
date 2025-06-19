import { GraduationCap, Briefcase } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import HeadingWithLines from "./HeadingWithLines";
import { TimelineProps, TimelineItem } from "@/types";

const localeMap: Record<string, string> = {
  en: "en-US",
  de: "de-DE",
};

function fmtDate(input: string, locale: string) {
  const date = new Date(input);
  return Number.isNaN(date.getTime())
    ? input
    : date.toLocaleDateString(locale, { year: "numeric", month: "short" });
}

export default async function Timeline({ items }: TimelineProps) {
  const t = await getTranslations("Timeline");

  const sortedItems = [...items].sort(
    (a, b) =>
      new Date(b.end ?? b.start).getTime() -
      new Date(a.end ?? a.start).getTime()
  );

  return (
    <>
      <HeadingWithLines title={t("title")} description={t("description")} />
      <div className="relative overflow-x-auto scroll-smooth pb-4">
        {/* Extra padding on the left ensures the first item isn’t chopped on tiny screens */}
        <div className="flex justify-center items-start space-x-12 px-160 md:px-2 py-2 snap-x snap-mandatory">
          {sortedItems.map((item, idx) => (
            <Item key={item.id} item={item} isLast={idx === items.length - 1} />
          ))}
        </div>
      </div>
    </>
  );
}

async function Item({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Timeline" });
  const Icon = item.type === "education" ? GraduationCap : Briefcase;

  const formattedLocale = localeMap[locale] ?? "de-DE";

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
}
