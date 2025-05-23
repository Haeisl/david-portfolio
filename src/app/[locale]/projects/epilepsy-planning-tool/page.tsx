import ProjectLayout from "@/components/projects/ProjectLayout";

export default function EpilepsyPlanningTool() {
  return (
    <ProjectLayout
      title="MyTodo — Cross-platform Task Manager"
      category="Personal Project"
      stack={["Next.js 15", "Tailwind v4", "Supabase", "Radix UI"]}
      problem={
        <>
          <p>I wanted a task manager that&nbsp;…</p>
        </>
      }
      solution={
        <>
          <p>I chose a serverless Supabase backend because&nbsp;…</p>
        </>
      }
      images={[
        { src: "/projects/todo/list.png", alt: "Main list view" },
        { src: "/projects/todo/stats.png", alt: "Productivity stats" },
      ]}
    >
      {/* Extra optional section */}
      <h2>Results</h2>
      <p>The app hit 1 000 MAU two months after launch.</p>
    </ProjectLayout>
  );
}
