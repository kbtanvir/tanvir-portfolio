import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import StarsSVG, { TerrainSVG } from "../../../lib/atoms/SVG/WelcomeSVGs";

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

export function StarsAnimation() {
  return (
    <Box position={"absolute"} top="0" left="0" zIndex={0} w="full">
      <Stack position={"absolute"}>
        <StarsSVG />
      </Stack>
      <Stack position={"absolute"} left="50%">
        <StarsSVG />
      </Stack>
      <Stack left="150" top="350" position={"absolute"}>
        <StarsSVG color="#FFD12D" r={3} />
      </Stack>
      <Stack right="130" top="250" position={"absolute"}>
        <StarsSVG color="#FFD12D" r={3} />
      </Stack>
      <Stack left="-330" top="150" position={"absolute"}>
        <StarsSVG color="#7EFFEA" r={1.2} />
      </Stack>
      <Stack right="330" top="150" position={"absolute"}>
        <StarsSVG color="#7EFFEA" r={1.2} />
      </Stack>
    </Box>
  );
}
function MoonAnimation() {
  return (
    <Stack right="0" position={"absolute"} zIndex="2">
      <Stack
        position="absolute"
        width={"320px"}
        height={"320px"}
        right="550"
        top="-150"
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
    </Stack>
  );
}
function MountainAnimation() {
  return (
    <Stack right="150px" bottom="20" position={"absolute"} zIndex="2">
      <Image
        src="/welcome/mountain.svg"
        width={904}
        height={382}
        alt="Mountain"
      />
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
