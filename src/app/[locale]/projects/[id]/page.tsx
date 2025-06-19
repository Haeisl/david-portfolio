import projects from "@/data/projects";
import ProjectLayout from "@/components/projects/ProjectLayout";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ProjectPageProps } from "@/types";

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;

  const project = projects.find((proj) => proj.id === params.id);

  if (!project) {
    notFound();
  }
  const t = await getTranslations("Projects");

  const problem: string[] = t.raw(project.problemKey) as string[];
  const approach: string[] = t.raw(project.approachKey) as string[];

  let images = undefined;
  if (project.images) {
    images = project.images.map((img) => ({
      src: img.src,
      alt: t(img.altKey),
      caption: img.captionKey ? t(img.captionKey) : undefined,
    }));
  }

  return (
    <ProjectLayout
      title={t(project.titleKey)}
      summary={t(project.summaryKey)}
      type={project.type}
      category={t(project.categoryKey)}
      githubUrl={project.githubUrl}
      githubNames={project.githubNames}
      stack={project.techStack}
      problemTitle={t("problemtitle")}
      problem={problem}
      approachTitle={t("approachtitle")}
      approach={approach}
      galleryTitle={t("gallerytitle")}
      images={images}
    />
  );
}
