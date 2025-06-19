import FadeInSection from "@/components/general/FadeInSection";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";
import { getTranslations } from "next-intl/server";

export default async function Projects() {
  const t = await getTranslations("ProjectsPage");

  return (
    <div className="container mx-auto py-10 space-y-6 px-2">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{t("legend")}</h2>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-l-4 border-blue-500" />
            <span>{t("thesis")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-l-4 border-green-500" />
            <span>{t("practical")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-l-4 border-purple-500" />
            <span>{t("private")}</span>
          </div>
        </div>
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
