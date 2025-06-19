import Link from "next/link";
import { ReactNode } from "react";
import { Github } from "lucide-react";
import { ProjectType } from "@/data/projects";
import ImageModal from "../general/ImageModal";

type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectLayoutProps = {
  title?: string;
  summary: ReactNode;
  type?: ProjectType;
  category?: string;
  stack?: string[];
  githubUrl?: string[];
  githubNames?: string[];
  problem: ReactNode;
  approach: ReactNode;
  problemTitle: string;
  approachTitle: string;
  galleryTitle: string;
  images?: ProjectImage[];
};

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
  githubNames,
  problem,
  approach,
  problemTitle,
  approachTitle,
  galleryTitle,
  images = [],
}: ProjectLayoutProps) {
  const categoryClasses = type
    ? typeToTagClass[type]
    : "bg-accent/10 text-accent";

  return (
    <article className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-8">
      {/* header */}
      <header className="mb-12 space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-[25px] sm:text-4xl font-extrabold tracking-tight text-textlight dark:text-textdark">
            {title}
          </h1>

          {githubUrl &&
            (githubUrl.length == 1 ? (
              <Link
                href={githubUrl[0]}
                aria-label="View source on GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-100"
              >
                <Github size={28} />
              </Link>
            ) : githubUrl.length > 1 && githubNames ? (
              githubUrl.map((url, ind) => {
                return (
                  <Link
                    key={url}
                    href={url}
                    aria-label="View source on GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex text-gray-500 transition"
                  >
                    <Github
                      size={28}
                      className="group-hover:text-gray-900 dark:group-hover:text-gray-100"
                    />
                    <span className="text-gray-500 mt-1 group-hover:text-gray-900 dark:group-hover:text-gray-100 hidden sm:block">
                      {githubNames[ind]}
                    </span>
                  </Link>
                );
              })
            ) : (
              <></>
            ))}
        </div>

        {category && (
          <span
            className={`inline-block rounded-full h-2 w-sm sm:w-xl md:w-2xl ${categoryClasses}`}
          />
        )}

        {/* tech stack pills */}
        {stack.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-tag px-2 py-1 text-xs font-medium text-textlight dark:bg-tagdark dark:text-textdark"
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
        <h2 className="mb-2 text-xl font-semibold text-textlight dark:text-textdark">
          {problemTitle}
        </h2>
        {problem}
      </section>
      {/* Approach */}
      <section className="mb-12 max-w-none">
        <h2 className="mb-2 text-xl font-semibold text-textlight dark:text-textdark">
          {approachTitle}
        </h2>
        {approach}
      </section>
      {/* Gallery */}
      {images?.length > 0 && (
        <section className="space-y-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
            {galleryTitle}
          </h2>
          <div className="grid gap-6 place-items-center sm:grid-cols-3">
            {images.map(({ src, alt, caption }) => (
              <ImageModal key={src} src={src} alt={alt} caption={caption} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
