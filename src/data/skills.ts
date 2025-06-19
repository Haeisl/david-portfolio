import { Skill, TFunction } from "@/types";

export function getSkillsData(t: TFunction): Skill[] {
  return [
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
}
