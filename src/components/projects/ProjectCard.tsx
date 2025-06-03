"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ProjectType } from "@/data/projects";
import { useLocale } from "next-intl";

interface ProjectCardProps {
  id: string;
  type: "thesis" | "practical" | "private";
  techStack: string[];
  imageUrl?: string;
}

/** tailwind v4: map each project type to a left-border colour */
export const typeToBorderClass: Record<ProjectType, string> = {
  [ProjectType.THESIS]: "border-l-4 border-blue-500",
  [ProjectType.PRACTICAL]: "border-l-4 border-green-500",
  [ProjectType.PRIVATE]: "border-l-4 border-purple-500",
};

const ProjectCard = ({ id, type, techStack, imageUrl }: ProjectCardProps) => {
  const t = useTranslations("Projects");
  const locale = useLocale();

  const title = t(`${id}.title`);
  const description = t(`${id}.description`);

  return (
    <Link href={`/${locale}/projects/${id}`} className="block h-full">
      <div
        className={`group bg-bgaccentlight dark:bg-bgaccentdark rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row-reverse h-full ${typeToBorderClass[type]}`}
      >
        {/* Thumbnail (optional) */}
        {imageUrl && (
          <div className="relative w-full md:w-1/3 h-48 md:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Text block */}
        <div className="p-4 md:w-2/3 text-textlight dark:text-textdark">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-[var(--color-primary)] dark:group-hover:text-[var(--color-primarydark)] transition-colors duration-300">
            {title}
          </h3>

          {/* project-type pill removed */}

          <p className="line-clamp-3">{description}</p>

          {/* Tech-stack chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-200 dark:bg-gray-800 rounded px-2 py-1 text-sm text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
