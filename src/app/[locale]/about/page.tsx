import { getTranslations } from "next-intl/server";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ThisOrThat from "@/components/profile/ThisOrThat";
import Timeline from "@/components/profile/Timeline";
import FadeInSection from "@/components/general/FadeInSection";
import SkillsSection from "@/components/profile/SkillsSection";
import ResumeDownload from "@/components/profile/Resume";
import { getSkillsData } from "@/data/skills";
import { getTimelineData } from "@/data/timeline";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Meta.about");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://david-hasse.de/en/about",
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
};

export default async function ProfilePage() {
  const t = await getTranslations("Profile");
  const skills = getSkillsData(t);
  const timeline = getTimelineData(t);

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
