// data/projects.ts
export enum ProjectType {
  THESIS = "thesis",
  PRACTICAL = "practical",
  PRIVATE = "private",
}

const projects = [
  {
    id: "epilepsy",
    type: ProjectType.THESIS,
    techStack: ["Python", "C++", "Unreal Engine 5", "Docker", "Visualization"],
    imagePreview:
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy.png?raw=true",
    githubUrl: "",
    // translation keys
    titleKey: "epilepsy.title",
    summaryKey: "epilepsy.summary",
    categoryKey: "epilepsy.category",
    problemKey: "epilepsy.problem",
    approachKey: "epilepsy.approach",

    // images
    images: [
      {
        src: "",
        altKey: "epilepsy.images.0.alt",
        captionKey: "epilepsy.images.0.caption",
      },
      {
        src: "",
        altKey: "epilepsy.images.1.alt",
        captionKey: "epilepsy.images.1.caption",
      },
    ],
  },
  {
    id: "portfolio",
    type: ProjectType.PRIVATE,
    techStack: ["NextJS", "React", "TypeScript", "TailwindCSS"],
    imagePreview:
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/portfolio.png?raw=true",

    // translation keys
    titleKey: "portfolio.title",
    summaryKey: "portfolio.summary",
    categoryKey: "portfolio.category",
    problemKey: "portfolio.problem",
    approachKey: "portfolio.approach",

    // images
    images: [
      {
        src: "",
        altKey: "portfolio.images.0.alt",
        captionKey: "portfolio.images.0.caption",
      },
      {
        src: "",
        altKey: "portfolio.images.1.alt",
        captionKey: "portfolio.images.1.caption",
      },
    ],
  },
  {
    id: "glyphs",
    title: "Field Consistent Glyphs",
    type: ProjectType.PRACTICAL,
    techStack: ["ParaView", "Python", "C++", "Linux", "Visualization"],
    imagePreview:
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/glyphs.png?raw=true",

    // translation keys
    titleKey: "glyphs.title",
    summaryKey: "glyphs.summary",
    categoryKey: "glyphs.category",
    problemKey: "glyphs.problem",
    approachKey: "glyphs.approach",

    // images
    images: [
      {
        src: "",
        altKey: "glyphs.images.0.alt",
        captionKey: "glyphs.images.0.caption",
      },
      {
        src: "",
        altKey: "glyphs.images.1.alt",
        captionKey: "glyphs.images.1.caption",
      },
    ],
  },
  {
    id: "cohorts",
    title: "Virtual Patient Cohorts",
    type: ProjectType.PRACTICAL,
    techStack: ["Python", "NumPy", "SciPy", "SymPy", "TkInter"],
    imagePreview:
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/cohorts.png?raw=true",

    // translation keys
    titleKey: "cohorts.title",
    summaryKey: "cohorts.summary",
    categoryKey: "cohorts.category",
    problemKey: "cohorts.problem",
    approachKey: "cohorts.approach",

    // images
    images: [
      {
        src: "",
        altKey: "cohorts.images.0.alt",
        captionKey: "cohorts.images.0.caption",
      },
      {
        src: "",
        altKey: "cohorts.images.1.alt",
        captionKey: "cohorts.images.1.caption",
      },
    ],
  },
];

export default projects;
