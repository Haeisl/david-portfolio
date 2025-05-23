import ProfileHeader from "@/components/profile/ProfileHeader";
import ThisOrThat from "@/components/profile/ThisOrThat";
import { Timeline, TimelineItem } from "@/components/profile/Timeline";
import FadeInSection from "@/components/general/FadeInSection";
import { Skill, SkillsSection } from "@/components/profile/SkillsSection";

export default function ProfilePage() {
  const sample: TimelineItem[] = [
    {
      id: "bsc",
      type: "education",
      title: "B.Sc. Computer Science",
      subtitle: "TUM",
      start: "2017-10",
      end: "2021-03",
      description: "Graduated with distinction.",
    },
    {
      id: "intern",
      type: "work",
      title: "Frontend Intern",
      subtitle: "Example GmbH",
      start: "2020-04",
      end: "2020-09",
      description: "Built internal tooling in React.",
    },
    {
      id: "msc",
      type: "education",
      title: "M.Sc. Data Science",
      subtitle: "TUM",
      start: "2021-10",
    },
  ];

  const skills2: Skill[] = [
    { id: "js", name: "JavaScript", level: 90, category: "Frontend" },
    { id: "ts", name: "TypeScript", level: 85, category: "Frontend" },
    { id: "react", name: "React", level: 88, category: "Frontend" },
    { id: "next", name: "Next.js", level: 80, category: "Frontend" },
    { id: "tailwind", name: "Tailwind CSS", level: 75, category: "Frontend" },
    { id: "node", name: "Node.js", level: 70, category: "Backend" },
    { id: "postgres", name: "PostgreSQL", level: 65, category: "Backend" },
    { id: "docker", name: "Docker", level: 60, category: "DevOps" },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <FadeInSection>
        <ProfileHeader />
      </FadeInSection>

      <FadeInSection>
        <SkillsSection
          skills={skills2}
          defaultOpen="Frontend" // accordion panel that’s open on first render
        />
      </FadeInSection>

      <FadeInSection>
        <Timeline items={sample} orientation="horizontal" />
      </FadeInSection>

      <FadeInSection>
        <ThisOrThat />
      </FadeInSection>
    </main>
  );
}
