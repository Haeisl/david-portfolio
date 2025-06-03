import ProjectLayout from "@/components/projects/ProjectLayout";
import { ProjectType } from "@/data/projects";

export default function EpilepsyPlanningTool() {
  return (
    <ProjectLayout
      title="Epilepsy Planning Tool"
      summary="ye this was based"
      type={ProjectType.THESIS}
      category="Bachelor's Thesis"
      githubUrl="https://github.com/haeisl"
      stack={["Unreal Engine 5", "Python", "Docker", "C++", "more"]}
      problem={
        <>
          <p>I wanted a task manager that&nbsp;…</p>
        </>
      }
      approach={
        <>
          <p>I chose a serverless Supabase backend because&nbsp;…</p>
        </>
      }
      images={[
        { src: "/projects/todo/list.png", alt: "Main list view" },
        { src: "/projects/todo/stats.png", alt: "Productivity stats" },
      ]}
    />
  );
}
