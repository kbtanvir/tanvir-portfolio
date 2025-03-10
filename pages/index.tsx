import { VStack } from "@chakra-ui/react";

import AboutSection1 from "../features/home/AboutSection1/Index";
import AboutSection2 from "../features/home/AboutSection2/AboutSection2";
import CTASection from "../features/home/CTASection/Index";
import SkillSection from "../features/home/SkillSection/Index";
import TestimonialSection from "../features/home/TestimonialSection/Index";
import WelcomeSection from "../features/home/WelcomeSection/Index";

import WorksSection from "../features/home/WorksSection/Index";

export default function Index() {
  return (
    <VStack {...{ width: "100%", minHeight: "100vh", bg: "black",gap: 0 }}>
      <WelcomeSection />
      <AboutSection1 />
      <WorksSection />
      <AboutSection2 />
      <SkillSection />
      <TestimonialSection />
      <CTASection />
    </VStack>
  );
}
