import AboutMe from "./[sections]/[about-me]";
import ContactSection from "./[sections]/[contact]";
import ExperienceSection from "./[sections]/[experiences]/[index]";
import Hero from "./[sections]/[hero]";
import SkillsSection from "./[sections]/[skills]/[index]";
import WorkSection from "./[sections]/[work]/[index]";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
