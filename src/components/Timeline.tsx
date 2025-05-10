interface Experience {
  date: string;
  title: string;
  description: string;
}
const experiences: Experience[] = [
  {
    date: "May 2023 - Present",
    title: "Software Engineer at XYZ",
    description: "Building scalable web apps with Next.js",
  },
  {
    date: "Jan 2021 - Apr 2023",
    title: "Frontend Developer at ABC",
    description: "Developed component library in React",
  },
  {
    date: "Sep 2019 - Dec 2020",
    title: "Intern at StartUp",
    description: "Worked on MVP features and testing",
  },
];

export default function Timeline() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Experience</h2>
      <ul className="space-y-4 max-w-2xl mx-auto">
        {experiences.map((e, i) => (
          <li
            key={i}
            className="pl-4 border-l-4 border-primary dark:border-primarydark"
          >
            <span className="text-sm text-textaltlight dark:text-textaltdark">
              {e.date}
            </span>
            <h3 className="text-xl font-medium">{e.title}</h3>
            <p className="text-textaltlight dark:text-textaltdark">
              {e.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
