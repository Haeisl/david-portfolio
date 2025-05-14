import CallToAction from "@/components/landing/CallToAction";
import { HeroTypewriter } from "@/components/landing/Hero";
import FadeInSection from "@/components/general/FadeInSection";

export default function Home() {
  return (
    <>
      <FadeInSection>
        <HeroTypewriter />
      </FadeInSection>
      <FadeInSection>
        <CallToAction />
      </FadeInSection>
    </>
  );
}
