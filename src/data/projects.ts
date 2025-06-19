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
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy-preview.png?raw=true",
    githubUrl: [
      "https://github.com/Haeisl/PT_Backend",
      "https://github.com/Haeisl/PT_Frontend",
    ],
    githubNames: ["Backend", "Frontend"],

    // translation keys
    titleKey: "epilepsy.title",
    summaryKey: "epilepsy.summary",
    categoryKey: "epilepsy.category",
    problemKey: "epilepsy.problem",
    approachKey: "epilepsy.approach",

    // images
    images: [
      {
        src: "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy-images/configuration.png?raw=true",
        altKey: "epilepsy.images.0.alt",
        captionKey: "epilepsy.images.0.caption",
      },
      {
        src: "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy-images/interpolation.png?raw=true",
        altKey: "epilepsy.images.1.alt",
        captionKey: "epilepsy.images.1.caption",
      },
      {
        src: "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy-images/ROI.png?raw=true",
        altKey: "epilepsy.images.2.alt",
        captionKey: "epilepsy.images.2.caption",
      },
      {
        src: "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy-images/raw-result.png?raw=true",
        altKey: "epilepsy.images.3.alt",
        captionKey: "epilepsy.images.3.caption",
      },
      {
        src: "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy-images/UE-result.png?raw=true",
        altKey: "epilepsy.images.4.alt",
        captionKey: "epilepsy.images.4.caption",
      },
      {
        src: "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/epilepsy-images/histogram.png?raw=true",
        altKey: "epilepsy.images.5.alt",
        captionKey: "epilepsy.images.5.caption",
      },
    ],
  },
  {
    id: "portfolio",
    type: ProjectType.PRIVATE,
    techStack: ["NextJS", "React", "TypeScript", "TailwindCSS"],
    imagePreview:
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/portfolio-preview.png?raw=true",

    githubUrl: ["https://github.com/Haeisl/david-portfolio"],
    // translation keys
    titleKey: "portfolio.title",
    summaryKey: "portfolio.summary",
    categoryKey: "portfolio.category",
    problemKey: "portfolio.problem",
    approachKey: "portfolio.approach",

    // images
    // images: [
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "portfolio.images.0.alt",
    //     captionKey: "portfolio.images.0.caption",
    //   },
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "portfolio.images.1.alt",
    //     captionKey: "portfolio.images.1.caption",
    //   },
    // ],
  },
  {
    id: "glyphs",
    title: "Field Consistent Glyphs",
    type: ProjectType.PRACTICAL,
    techStack: ["ParaView", "Python", "C++", "Linux", "Visualization"],
    imagePreview:
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/glyphs-preview.png?raw=true",
    githubUrl: ["https://github.com/Haeisl/FieldConsistentGlyphs"],

    // translation keys
    titleKey: "glyphs.title",
    summaryKey: "glyphs.summary",
    categoryKey: "glyphs.category",
    problemKey: "glyphs.problem",
    approachKey: "glyphs.approach",

    // images
    // images: [
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "glyphs.images.0.alt",
    //     captionKey: "glyphs.images.0.caption",
    //   },
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "glyphs.images.1.alt",
    //     captionKey: "glyphs.images.1.caption",
    //   },
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "glyphs.images.1.alt",
    //     captionKey: "glyphs.images.1.caption",
    //   },
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "glyphs.images.1.alt",
    //     captionKey: "glyphs.images.1.caption",
    //   },
    // ],
  },
  {
    id: "cohorts",
    title: "Virtual Patient Cohorts",
    type: ProjectType.PRACTICAL,
    techStack: ["Python", "NumPy", "SciPy", "SymPy", "TkInter"],
    imagePreview:
      "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/cohorts-preview.png?raw=true",
    githubUrl: ["https://github.com/Haeisl/VPC_Fit"],

    // translation keys
    titleKey: "cohorts.title",
    summaryKey: "cohorts.summary",
    categoryKey: "cohorts.category",
    problemKey: "cohorts.problem",
    approachKey: "cohorts.approach",

    // images
    // images: [
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "cohorts.images.0.alt",
    //     captionKey: "cohorts.images.0.caption",
    //   },
    //   {
    //     src: "https://placehold.co/600x400/png",
    //     altKey: "cohorts.images.1.alt",
    //     captionKey: "cohorts.images.1.caption",
    //   },
    // ],
  },
];

export default projects;
