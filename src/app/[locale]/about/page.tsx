import ProfileHeader from "@/components/profile/ProfileHeader";
import ThisOrThat from "@/components/profile/ThisOrThat";
import { Timeline, TimelineItem } from "@/components/profile/Timeline";
import FadeInSection from "@/components/general/FadeInSection";
import { Skill, SkillsSection } from "@/components/profile/SkillsSection";
import { useTranslations } from "next-intl";
import ResumeDownload from "@/components/profile/Resume";

export default function ProfilePage() {
  const t = useTranslations("Profile");
  const timeline: TimelineItem[] = [
    {
      id: "bsc",
      type: "education",
      title: t("bsctitle"),
      subtitle: t("unititle"),
      start: "2018-10",
      end: "2025-03",
      description: t("bscdescription"),
    },
    {
      id: "abi",
      type: "education",
      title: "Abitur",
      subtitle: "Hölderlin-Gymnasium Heidelberg",
      start: "2009-09",
      end: "2017-09",
      description: t("abiturdescription"),
    },
    {
      id: "schoolinternship",
      type: "work",
      title: t("schoolinternshiptitle"),
      subtitle: t("schoolinternshipsubtitle"),
      start: "2015-06",
      end: "2015-07",
    },
    {
      id: "waitge",
      type: "education",
      title: t("waitingtitle"),
      subtitle: t("unititle"),
      start: "2025-03",
      end: "2025-05",
      description: t("waitingdescription"),
    },
    {
      id: "jobsearch",
      type: "work",
      title: t("jobsearchtitle"),
      subtitle: t("jobsearchsubtitle"),
      start: "2025-06",
      description: t("jobsearchdescription"),
    },
  ];

  const skills: Skill[] = [
    // Frontend
    { id: "js", name: "JavaScript", level: 90, category: "Frontend" },
    { id: "ts", name: "TypeScript", level: 85, category: "Frontend" },
    { id: "react", name: "React", level: 88, category: "Frontend" },
    { id: "next", name: "Next.js", level: 80, category: "Frontend" },
    { id: "tailwind", name: "Tailwind CSS", level: 75, category: "Frontend" },

    // Backend
    { id: "postgres", name: "PostgreSQL", level: 65, category: "Backend" },
    { id: "java", name: "Java", level: 80, category: "Backend" },
    { id: "sql", name: "SQL", level: 75, category: "Backend" },
    { id: "python", name: "Python", level: 70, category: "Backend" },
    { id: "cpp", name: "C++", level: 75, category: "Backend" },

    // DevOps / Tools
    { id: "docker", name: "Docker", level: 60, category: "DevOps" },
    { id: "linux", name: "Linux", level: 70, category: "DevOps" },
    { id: "bash", name: "Bash/Shell Scripting", level: 65, category: "DevOps" },
    { id: "git", name: "Git", level: 80, category: "DevOps" },

    // Visualization & Simulation
    {
      id: "unreal",
      name: "Unreal Engine",
      level: 70,
      category: t("visualization"),
    },
    {
      id: "paraview",
      name: "ParaView",
      level: 65,
      category: t("visualization"),
    },
    { id: "opengl", name: "OpenGL", level: 60, category: t("visualization") },

    // Scientific & Academic
    {
      id: "matplotlib",
      name: "Matplotlib",
      level: 75,
      category: "Data Science",
    },
    {
      id: "numpy",
      name: "NumPy",
      level: 80,
      category: "Data Science",
    },
    {
      id: "scipy",
      name: "SciPy",
      level: 70,
      category: "Data Science",
    },

    // Tools
    { id: "vscode", name: "VSCode", level: 90, category: "Tools" },
    { id: "latex", name: "LaTeX", level: 85, category: "Tools" },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <FadeInSection>
        <ProfileHeader />
      </FadeInSection>

      <FadeInSection>
        <SkillsSection
          skills={skills}
          defaultOpen="" // accordion panel that’s open on first render
        />
      </FadeInSection>

      <FadeInSection>
        <Timeline items={timeline} orientation="horizontal" />
      </FadeInSection>

      <FadeInSection>
        <ThisOrThat />
      </FadeInSection>

      <FadeInSection>
        <ResumeDownload />
      </FadeInSection>
    </main>
  );
}
