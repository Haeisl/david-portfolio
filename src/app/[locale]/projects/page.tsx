import FadeInSection from "@/components/general/FadeInSection";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Legend from "@/components/projects/Legend";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Meta.projects");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://david-hasse.de/en/projects",
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
};

export default function Projects() {
  return (
    <div className="container mx-auto py-10 space-y-6 px-2">
      <Legend />
      <div className="space-y-2">
        {projects.map((project) => (
          <FadeInSection key={project.id}>
            <div key={project.id}>
              <ProjectCard
                id={project.id}
                type={project.type}
                techStack={project.techStack}
                imageUrl={project.imagePreview}
              />
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}
