import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Github } from "lucide-react";
import { ProjectType } from "@/data/projects";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

interface ProjectLayoutProps {
  title?: string;
  summary: ReactNode;
  type?: ProjectType;
  category?: string;
  stack?: string[];
  githubUrl?: string;
  problem: ReactNode;
  approach: ReactNode;
  images?: ProjectImage[];
}

const typeToTagClass: Record<ProjectType, string> = {
  [ProjectType.THESIS]:
    "bg-blue-100  text-blue-800  dark:bg-blue-900  dark:text-blue-100",
  [ProjectType.PRACTICAL]:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  [ProjectType.PRIVATE]:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
};

export default function ProjectLayout({
  title,
  summary,
  type,
  category,
  stack = [],
  githubUrl,
  problem,
  approach,
  images = [],
}: ProjectLayoutProps) {
  /* pick the right colour set for the pill,
     falling back to a neutral accent when no type present */
  const categoryClasses = type
    ? typeToTagClass[type]
    : "bg-accent/10 text-accent";

  return (
    <article className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-8">
      {/* header */}
      <header className="mb-12 space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h1>

          {githubUrl && (
            <Link
              href={githubUrl}
              aria-label="View source on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Github size={28} />
            </Link>
          )}
        </div>

        {category && (
          <span
            className={`inline-block rounded-full h-2 w-sm sm:w-xl ${categoryClasses}`}
          />
        )}

        {/* tech stack pills (unchanged, still icon-free) */}
        {stack.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </header>
      {/* Summary */}
      <section className="mb-10 max-w-none">{summary}</section>
      {/* Problem */}
      <section className="mb-8 max-w-none">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
          Problem
        </h2>
        {problem}
      </section>
      {/* Approach */}
      <section className="mb-12 max-w-none">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
          Approach
        </h2>
        {approach}
      </section>
      {/* Gallery */}
      {images.length > 0 && (
        <section className="space-y-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
            Gallery
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
    </article>
  );
}
