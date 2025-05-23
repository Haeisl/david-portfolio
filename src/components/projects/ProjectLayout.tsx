"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

interface ProjectLayoutProps {
  /** Main title of the project */
  title: string;
  /** Category tag e.g. “Personal Project”, “Software Practical”, “Bachelor’s Thesis” */
  category?: string;
  /** Tech stack list (displayed as little pills) */
  stack?: string[];
  /** What problem were you trying to solve? Accepts Markdown/JSX. */
  problem: ReactNode;
  /** How did you tackle it? Accepts Markdown/JSX. */
  solution: ReactNode;
  /** Inline gallery showing progress/final screenshots */
  images?: ProjectImage[];
  /** Anything else (metrics, links, future work…) */
  children?: ReactNode;
}

/**
 * Re‑usable layout for detailed project pages.
 * Keeps content centred, readable and themable with one accent colour.
 */
export default function ProjectLayout({
  title,
  category,
  stack = [],
  problem,
  solution,
  images = [],
  children,
}: ProjectLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-8">
      {/* Header */}
      <header className="mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        {category && (
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            {category}
          </span>
        )}

        {stack.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-4">
            {stack.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                <BadgeCheck size={12} className="text-accent" />
                {tech}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Problem Statement */}
      <section className="mb-12 max-w-none">
        <h2>Problem</h2>
        {problem}
      </section>

      {/* Solution */}
      <section className="mb-12 max-w-none">
        <h2>Approach &amp; Solution</h2>
        {solution}
      </section>

      {/* Image Gallery */}
      {images.length > 0 && (
        <section className="mb-12 space-y-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            In‑Progress &amp; Final Shots
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {images.map(({ src, alt, caption }) => (
              <figure key={src} className="overflow-hidden rounded-2xl shadow">
                <Image
                  src={src}
                  alt={alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover transition duration-300 hover:scale-105"
                />
                {caption && (
                  <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Extra Content – metrics, challenges, embeds, whatever */}
      {children && <section className="max-w-none">{children}</section>}
    </article>
  );
}
