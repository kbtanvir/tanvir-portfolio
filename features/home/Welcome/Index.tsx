import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import { TerrainSVG } from "../../../lib/atoms/SVG/WelcomeSVGs";
import { StarsAnimation } from "./StarsAnimation";

export default function WelcomeSection() {
  return (
    <VStack
      bg="linear-gradient(180deg, #0C0D0F 41.15%, #205B6D 100%);"
      w="full"
      minH="100vh"
      justifyContent={"center"}
      position="relative"
    >
      <StarsAnimation />
      <MoonAnimation />
      <MountainAnimation />
      <TerrainAnimation />
      <VStack zIndex={5} alignItems={"start"} alignSelf="start" pl="20">
        <HStack justifyContent={"start"} alignItems="start">
          <Text color="#FFD12D" fontSize={40} fontWeight="700">
            Hi, I am
          </Text>
          <Text color="white" fontSize={40} fontWeight="700">
            Tanvir
          </Text>
        </HStack>
        <HStack>
          <Text color="white" fontSize={40} fontWeight="700">
            I make
          </Text>
          <Text color="#FFD12D" fontSize={40} fontWeight="700">
            Mobile apps
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

function MoonAnimation() {
  const { scrollYProgress } = useScroll();
  return (
    <Stack right="0" position={"absolute"} zIndex="2">
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 600]),
        }}
      >
        <Stack
          position="absolute"
          width={"120px"}
          height={"120px"}
          right={`650px`}
          top=" 0"
          zIndex={2}
        >
          <Image src="/welcome/moon.svg" layout="fill" alt="moon" />
        </Stack>

        <Stack
          w="1311px"
          zIndex={0}
          h="454px"
          position="absolute"
          right="150px"
          top="-120px"
          bg="radial-gradient(50% 50% at 50% 50%, rgba(79, 237, 234, 0.228) 0%, rgba(187, 55, 208, 0) 94.27%);"
        />
      </animated.div>
    </Stack>
  );
}
function MountainAnimation() {
  const { scrollYProgress } = useScroll();
  return (
    <Stack right="150px" bottom="20" position={"absolute"} zIndex="2">
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 200]),
        }}
      >
        <Image
          src="/welcome/mountain.svg"
          width={904}
          height={382}
          alt="Mountain"
        />
      </animated.div>
    </Stack>
  );
}
function TerrainAnimation() {
  return (
    <Stack position={"absolute"} zIndex="3" bottom="-40" w="full">
      <TerrainSVG />
    </Stack>
  );
}
