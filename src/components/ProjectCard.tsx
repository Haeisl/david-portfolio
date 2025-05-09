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

const typeToColorClass: Record<ProjectType, string> = {
  [ProjectType.THESIS]: "bg-blue-100 text-blue-800",
  [ProjectType.PRACTICAL]: "bg-green-100 text-green-800",
  [ProjectType.PRIVATE]: "bg-purple-100 text-purple-800",
};

const ProjectCard = ({ id, type, techStack, imageUrl }: ProjectCardProps) => {
  const t = useTranslations("Projects");
  console.log(id);
  const title = t(`${id}.title`);
  const description = t(`${id}.description`);
  const locale = useLocale();
  return (
    <Link href={`/${locale}/projects/${id}`} className="h-full block">
      {/* <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row-reverse"> */}
      <div className="group bg-bgaccentlight dark:bg-bgaccentdark rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row-reverse h-full">
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
        <div className="p-4 md:w-2/3 text-textlight dark:text-textdark ">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary dark:group-hover:text-primarydark transition-colors duration-300">
            {title}
          </h3>
          <span
            className={`inline-block px-2 py-1 text-sm font-medium rounded mb-2 ${typeToColorClass[type]}`}
          >
            {t(`types.${type}`)}
          </span>
          <p className="line-clamp-3">{description}</p>
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
