import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
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
      <Footer></Footer>
    </VStack>
  );
}


function Footer() {
  return (
    <HStack {...styles.footer}>
      <Text {...styles.footerText}>
        Made with ❤️ by{" "}
        <Text as="a" href="https://twitter.com/AdityaBhargava_" {...styles.link}>
          K.B. Tanvir
        </Text>
      </Text>
    </HStack>
  );
}