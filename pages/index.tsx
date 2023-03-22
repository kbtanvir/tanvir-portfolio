import AboutSection1 from "../features/home/AboutSection1/Index";
import AboutSection2 from "../features/home/AboutSection2/Index";
import WelcomeSection from "../features/home/Welcome/Index";
import WorksSection from "../features/home/WorksSection/Index";

export default function Index() {
  return (
    <>
      {/* <Pointer />
      <Header /> */}
      <WelcomeSection />
      <AboutSection1 />
      <WorksSection />
      <AboutSection2 />
    </>
  );
}
