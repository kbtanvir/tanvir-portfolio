import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";

export default function WorksSection() {
  const { scrollYProgress } = useScroll();
  return (
    <VStack
      justifyContent={"space-between"}
      position="relative"
      minH="1200px"
      pt="200px"
      pb="200"
      w="full"
      bg="linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);"
    >
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [100, 500]),
            top: 0,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <HStack gap="600px">
            <ProjectItem name="Project Name" imageUrl="" />
            <ProjectItem name="Project Name" imageUrl="" />
          </HStack>
        </animated.div>
        <animated.div
          style={{
            right: scrollYProgress.to([0, 1], [-800, 1300]),
            top: -200,
            position: "absolute",
          }}
        >
          <CoolText text="Live" />
        </animated.div>
      </HStack>
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-800, 1300]),
            top: -200,
            position: "absolute",
          }}
        >
          <CoolText text="To" />
        </animated.div>
        <animated.div
          style={{
            right: scrollYProgress.to([0, 1], [200, 1000]),
            top: 0,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <HStack gap="600px">
            <ProjectItem name="Project Name" imageUrl="" />
            <ProjectItem name="Project Name" imageUrl="" />
          </HStack>
        </animated.div>
      </HStack>
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-0, 500]),
            top: 0,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <HStack gap="600px">
            <ProjectItem name="Project Name" imageUrl="" />
            <ProjectItem name="Project Name" imageUrl="" />
          </HStack>
        </animated.div>
        <animated.div
          style={{
            right: scrollYProgress.to([0, 1], [-800, 500]),
            top: -200,
            position: "absolute",
          }}
        >
          <CoolText text="Work" />
        </animated.div>
      </HStack>
    </VStack>
  );
}

export function CoolText({ text, bg }: { text: string; bg?: string }) {
  return (
    <Text
      {...{
        fontWeight: 700,
        fontSize: "302px",
        lineHeight: "365px",
        textTransform: "uppercase",
        background:
          bg || "linear-gradient(180deg, #2C3344 0%, rgba(44, 51, 68, 0) 100%)",
        backgroundClip: "text",
      }}
    >
      {text}
    </Text>
  );
}

function ProjectItem({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <VStack position={"relative"} justifyContent="center" alignItems={"start"}>
      <Box left="-100px" position="relative">
        <Text
          color="white"
          fontSize={"24px"}
          position="relative"
          zIndex={1}
          fontWeight="700"
          textTransform={"uppercase"}
        >
          {name}
        </Text>
        <Box
          bg="#FFD12D"
          top="10px"
          h="3px"
          border={"none"}
          position="relative"
          zIndex={2}
          w="130px"
        />
      </Box>
      <Stack
        {...{
          width: "487px",
          height: "276px",
          position: "absolute",
          zIndex: 0,
          background: "linear-gradient(180deg, #2f293c 0%, rgb(17, 18, 24)0%)",
        }}
      >
        {/* <Image src="/about/about1.png" layout="fill" alt="moon" /> */}
      </Stack>
    </VStack>
  );
}
