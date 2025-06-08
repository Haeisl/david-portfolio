import { ArrowRight } from "lucide-react";

export default function BasedButton({
  href,
  icon,
  label,
  download,
  siteNavigation = false,
  className,
}: {
  href: string;
  icon?: React.ReactNode;
  label: string;
  download?: boolean;
  siteNavigation?: boolean;
  className?: string;
}) {
  return (
    <div className="flex justify-center items-center">
      <a
        href={href}
        download={download}
        target="_blank"
        className={`group relative inline-flex items-center gap-3 rounded-2xl border border-slate-400/50 bg-transparent
      px-6 py-3 text-base font-semibold  outline-none transition duration-300
      hover:scale-105 hover:border-slate-400 hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primarydark)]
      hover:text-textdark dark:hover:text-textlight
      focus-visible:ring-2 focus-visible:ring-slate-300 ${className}`}
      >
        {icon ? (
          <span className="w-6 h-6 flex-shrink-0 transition-colors text-[var(--color-primary)] dark:text-[var(--color-primarydark)] group-hover:text-textdark dark:group-hover:text-textlight">
            {icon}
          </span>
        ) : (
          <></>
        )}
        {label}
        {siteNavigation ? (
          <span>
            <ArrowRight size={18} />
          </span>
        ) : (
          <></>
        )}
      </a>
    </div>
  );
}
