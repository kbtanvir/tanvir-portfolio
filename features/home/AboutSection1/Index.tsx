import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";

export default function AboutSection1() {
  const { scrollYProgress } = useScroll();

  return (
    <HStack
      justifyContent={"space-between"}
      position="relative"
      minH="1000px"
      w="full"
      px={[6, "20"]}
      py={[10, "300px"]}
      bg="#212530"
      flexDir={["column", "row"]}
    >
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 800]),
          zIndex: 1,
        }}
      >
        <Stack maxW={"609px"}>
          <Text
            fontSize={[25, "35px"]}
            lineHeight="1.2"
            color="white"
            sx={{
              "& span": {
                color: "#FFD12D",
                fontSize: [25, "35px"],
                lineHeight: "1.2",
              },
            }}
          >
            Throughout my career, I`ve devoted considerable effort to
            transforming designs into applications and websites that are
            <span>
              precise, high-performing, easily accessible, and responsive
            </span>
            . I find the entire development process captivating and frequently
            involve myself in backend work. My passion for ambitious projects
            and positivity drives me, and I thrive in a collaborative and
            supportive work environment.
          </Text>
        </Stack>
      </animated.div>

      <BoyDreaming />
    </HStack>
  );
}

function BoyDreaming() {
  const { scrollYProgress } = useScroll();
  return (
    <Stack
      {...{
        height: [500, "802px"],
        width: [500, "802px"],
        position: "relative",
      }}
    >
      <animated.div
        style={{
          position: "absolute",
          y: scrollYProgress.to([0, 1], [-50, 150]),
          zIndex: 0,
        }}
      >
        <Image
          src="/about/sky.png"
          width={"802px"}
          height={"802px"}
          alt="moon"
        />
      </animated.div>
      {/* MOUNTAIN */}
      <animated.div
        style={{
          position: "absolute",
          bottom: "0",
          y: scrollYProgress.to([0, 1], [20, -150]),
          x: scrollYProgress.to([0, 1], [0, -50]),
        }}
      >
        <Image
          src="/about/mountain.png"
          width={"475px"}
          height={"264px"}
          alt="moon"
        />
      </animated.div>
      {/* BOY */}
      <Box
        as={animated.div}
        style={{
          position: "absolute",
          bottom: "0",
          right: "-100px",
          y: scrollYProgress.to([0, 1], [50, -200]),
          zIndex: 1,
        }}
      >
        <Image
          src="/about/boy.png"
          width={"663px"}
          height={"527px"}
          alt="moon"
        />
      </Box>
    </Stack>
  );
}
