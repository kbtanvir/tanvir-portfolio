import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import { styles } from "./styles";

export default function AboutSection1() {
  const { scrollYProgress } = useScroll();

  return (
    <Grid
      {...styles.grid}
      templateColumns={{
        base: "1fr",
        lg: "repeat(auto-fit, minmax(500px, 1fr))",
      }}
    >
      <Stack {...styles.textWrapper}>
        <animated.div
          style={{
            translateY: scrollYProgress.to([0, 1], [0, 800]),
            zIndex: 1,
          }}
        >
          <Text {...styles.aboutText}>
            With <strong>6+ years of experience</strong> as a{" "}
            <strong>full-stack developer</strong>, I specialize in building
            scalable and efficient web applications using{" "}
            <strong>Node.js</strong> and <strong>Python</strong>. Working
            remotely from <strong>Bangladesh</strong>, I have collaborated with
            global teams to deliver high-quality solutions that meet both
            technical and business needs. I am passionate about creating{" "}
            <span>clean, maintainable, and responsive applications</span> that
            prioritize accessibility and user experience.
          </Text>
        </animated.div>
      </Stack>
      <Stack {...styles.imageWrapper}>
        <BoyDreaming />
      </Stack>
    </Grid>
  );
}

function BoyDreaming() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <animated.div
        style={{
          y: scrollYProgress.to([0, 1], [-50, 150]),
          zIndex: 0,
        }}
      >
        <Box {...styles.skyWrapper}>
          <Image src="/about/sky.png" layout="fill" alt="moon" />
        </Box>
      </animated.div>
      {/* MOUNTAIN */}
      <animated.div
        style={{
          y: scrollYProgress.to([0, 1], [20, -150]),
          x: scrollYProgress.to([0, 1], [0, -100]),
        }}
      >
        <Box {...styles.mountainWrapper}>
          <Image src="/about/mountain.png" layout="fill" alt="moon" />
        </Box>
      </animated.div>
      {/* BOY */}
      <animated.div
        style={{
          y: scrollYProgress.to([0, 1], [50, -200]),
          zIndex: 1,
        }}
      >
        <Box {...styles.boyWrapper}>
          <Image src="/about/boy.png" layout="fill" alt="moon" />
        </Box>
      </animated.div>
    </>
  );
}
