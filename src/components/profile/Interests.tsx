const interests = [
  "Hiking and outdoor adventures",
  "Sci-fi movies and books",
  "Cooking new recipes",
  "Open-source contributions",
];

export default function Interests() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Interests</h2>
      <ul className="list-disc list-inside max-w-md mx-auto">
        {interests.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
