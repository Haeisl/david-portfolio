import ProfileHeader from "@/components/profile/ProfileHeader";
import SkillBar from "@/components/profile/SkillBar";
import ThisOrThat from "@/components/profile/ThisOrThat";
import Timeline from "@/components/profile/Timeline";
import Interests from "@/components/profile/Interests";
import FadeInSection from "@/components/general/FadeInSection";
import { useTranslations } from "next-intl";

export default function ProfilePage() {
  const t = useTranslations();
  const skills = [
    { skill: "JavaScript", level: 90 },
    { skill: "TypeScript", level: 85 },
    { skill: "React", level: 88 },
    { skill: "Next.js", level: 80 },
    { skill: "TailwindCSS", level: 75 },
    { skill: "Node.js", level: 70 },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <FadeInSection>
        <ProfileHeader />
      </FadeInSection>

      <FadeInSection>
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-2 text-center">Skills</h2>
          <h3 className="text-lg text-textaltlight dark:text-textaltdark mb-6 text-center">
            {t("Skills.description")}
          </h3>
          <div className="max-w-md mx-auto">
            {skills.map((s, i) => (
              <SkillBar key={i} skill={s.skill} level={s.level} />
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <ThisOrThat />
      </FadeInSection>

      <FadeInSection>
        <Timeline />
      </FadeInSection>

      <FadeInSection>
        <Interests />
      </FadeInSection>
    </main>
  );
}
