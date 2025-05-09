import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <div className="container mx-auto py-10 space-y-6">
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard
            id={project.id}
            type={project.type}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
