import projects from "@/data/projects";
import ProjectLayout from "@/components/projects/ProjectLayout";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;

  const project = projects.find((proj) => proj.id === params.id);

  if (!project) {
    notFound();
  }
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Projects" });

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
      problem={t(project.problemKey)}
      problemTitle={t("problemtitle")}
      approachTitle={t("approachtitle")}
      galleryTitle={t("gallerytitle")}
      approach={t(project.approachKey)}
      images={images}
    />
  );
}
