import { Grid, Stack, Text } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import { styles } from "./styles";

export default function AboutSection2() {
  const { scrollYProgress } = useScroll();

  return (
    <Grid {...styles.grid}>
      <animated.div
        style={{
          y: scrollYProgress.to([0, 1], [600, -100]),
        }}
      >
        <Stack {...styles.imageWrapper}>
          <Image src="/about/balance.png" layout="fill" alt="moon" />
        </Stack>
      </animated.div>

      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 600]),
          width: "100%",
        }}
      >
        <Stack {...styles.textWrapper}>
          <Text {...styles.aboutText}>
            I believe that our creations and our craftsmanship reflect our
            identity and values. That`s why I always aim to deliver{" "}
            <strong>Perfection</strong> in everything I do. Whether it`s writing{" "}
            <strong>clean and scalable code</strong> that can stand the test of
            time, or using the most <strong>efficient algorithms</strong>
            to ensure <strong>optimal performance</strong> because{" "}
            <strong>Speed is king</strong>, I take pride in my work and strive
            to improve myself constantly. I love what I do and I hope it shows
            in my results.
          </Text>
        </Stack>
      </animated.div>
    </Grid>
  );
}
