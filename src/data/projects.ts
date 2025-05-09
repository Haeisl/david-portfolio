// data/projects.ts
export enum ProjectType {
  THESIS = "thesis",
  PRACTICAL = "practical",
  PRIVATE = "private",
}

const projects = [
  {
    id: "epilepsy-planning-tool",
    type: ProjectType.THESIS,
    techStack: ["Python", "Unreal Engine", "Docker", "Visualization"],
    // imageUrl: "/images/epilepsy-tool.png",
    imageUrl: "https://fakeimg.pl/600x400?text=placeholder",
  },
  {
    id: "portfolio-website",
    type: ProjectType.PRIVATE,
    techStack: ["NextJS", "TailwindCSS", "TypeScript"],
    // imageUrl: "/images/portfolio.png",
    imageUrl: "https://fakeimg.pl/600x400?text=placeholder",
  },
  {
    id: "field-consistent-glyphs",
    type: ProjectType.PRACTICAL,
    techStack: ["ParaView", "Python", "Visualization"],
    // imageUrl: "/images/field-glyphs.png",
    imageUrl: "https://fakeimg.pl/600x400?text=placeholder",
  },
  {
    id: "virtual-patient-cohorts",
    type: ProjectType.PRACTICAL,
    techStack: ["Python", "NumPy", "SciPy", "TkInter"],
    // imageUrl: "/images/virtual-patients.png",
    imageUrl: "https://fakeimg.pl/600x400?text=placeholder",
  },
];

export default projects;
