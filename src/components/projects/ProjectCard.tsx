import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/types";
import { getLocale, getTranslations } from "next-intl/server";
import { ProjectCardProps } from "@/types";

/** map each project type to a left-border colour */
export const typeToBorderClass: Record<ProjectType, string> = {
  [ProjectType.THESIS]: "border-blue-500",
  [ProjectType.PRACTICAL]: "border-green-500",
  [ProjectType.PRIVATE]: "border-purple-500",
};

export default async function ProjectCard({
  id,
  type,
  techStack,
  imageUrl,
}: ProjectCardProps) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Projects" });

  const title = t(`${id}.title`);
  const description = t(`${id}.description`);

  return (
    <Link href={`/${locale}/projects/${id}`} className="block h-full">
      <div
        className={`group bg-bgaccentlight dark:bg-bgaccentdark rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row-reverse h-full border-l-4 ${typeToBorderClass[type]}`}
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
        <div className="group p-4 md:w-2/3 text-textlight dark:text-textdark group-hover:text-[var(--color-primary)] dark:group-hover:text-[var(--color-primarydark)] transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>

          <p className="line-clamp-3">{description}</p>

          {/* Tech-stack chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-tag dark:bg-tagdark rounded-md px-2 py-1 text-sm text-textlight dark:text-textdark group-hover:text-[var(--color-primary)] dark:group-hover:text-[var(--color-primarydark)] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
