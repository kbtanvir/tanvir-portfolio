import { HStack, Stack, Text } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";

export default function AboutSection2() {
  const { scrollYProgress } = useScroll();

  return (
    <HStack
      justifyContent={"space-between"}
      position="relative"
      minH="1000px"
      w="full"
      px={[6, "20"]}
      pb={["0"]}
      bg="#212530"
      zIndex={1}
      flexDir={["column-reverse", "row"]}
    >
      <animated.div
        style={{
          y: scrollYProgress.to([0, 1], [600, -100]),
        }}
      >
        <Stack zIndex={2} position="relative" top={[-20, 0]}>
          <Image
            src="/about/balance.png"
            width={"702px"}
            height={"702px"}
            alt="moon"
          />
        </Stack>
      </animated.div>

      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 600]),
        }}
      >
        <Stack maxW={"609px"} position={"relative"} top={[-100, 0]}>
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
            I believe that our creations and our craftsmanship reflect our
            identity and values. Thats why I always aim to deliver Perfection in
            everything I do. Whether it`s writing clean and scalable code that
            can stand the test of time, or using the most efficient algorithms
            to ensure optimal performance because Speed is king, I take pride in
            my work and strive to improve myself constantly. I love what I do
            and I hope it shows in my results.
          </Text>
        </Stack>
      </animated.div>
    </HStack>
  );
}
