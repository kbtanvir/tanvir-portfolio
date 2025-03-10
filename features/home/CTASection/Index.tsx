import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import CTAForm from "./CTAForm";
import { styles } from "./styles";

export default function CTASection() {
  const { scrollYProgress } = useScroll();
  return (
    <VStack {...styles.sectionWrapper}>
      <HStack {...styles.container}>
        <CTAForm />

        <animated.div
          style={{
            y: scrollYProgress.to([0, 1], [-1100, 0]),
            zIndex: 0,
            position: "relative",
          }}
        >
          <Box {...styles.rightImage}>
            <Image
              src="/campfire.png"
              alt="moon"
              width="700px"
              height="600px"
            />
          </Box>
        </animated.div>
      </HStack>
      <Footer />
    </VStack>
  );
}

function Footer() {
  return (
    <VStack {...styles.footerWrap}>
      <HStack>
        {[
          {
            text: "Github",
            link: "https://github.com/kbtanvir",
          },
          {
            text: "Linkedin",
            link: "https://www.linkedin.com/in/kbtanvir/",
          },

          {
            text: "Email",
            link: "mailto:tanvirkhaan004@gmail.com",
          },
          {
            text: "Resume",
            link: "https://www.canva.com/design/DAGhUZ3aVhI/XjpyEs-dANOTGYumOvcsqg/view?utm_content=DAGhUZ3aVhI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h45979f95a8",
          },
        ].map((item, i) => (
          <Link key={i} href={item.link} target="_blank">
            <Text {...styles.footerText} textDecoration={"underline"}>
              {item.text}
            </Text>
          </Link>
        ))}
      </HStack>
      <Text {...styles.footerText} textTransform={"uppercase"}>
        © {new Date().getFullYear()} KB Tanvir
      </Text>
    </VStack>
  );
}
