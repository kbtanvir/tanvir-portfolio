import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";

export default function WorksSection() {
  return (
    <VStack
      justifyContent={"space-between"}
      position="relative"
      minH="1200px"
      py="200px"
      bg="linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);"
    >
      <HStack position={"relative"} w="full">
        <Stack position={"absolute"} left="240px">
          <ProjectItem name="Project Name" imageUrl="" />
        </Stack>
        <Stack position={"absolute"} right="0">
          <CoolText text="Live" />
        </Stack>
      </HStack>
      <HStack position={"relative"} w="full">
        <Stack position={"absolute"} left="0">
          <CoolText text="Dream" />
        </Stack>
        <Stack position={"absolute"} right="440">
          <ProjectItem name="Project Name" imageUrl="" />
        </Stack>
      </HStack>
      <HStack position={"relative"} w="full">
        <Stack position={"absolute"} left="440px">
          <ProjectItem name="Project Name" imageUrl="" />
        </Stack>
        <Stack position={"absolute"} right="0">
          <CoolText text="Work" />
        </Stack>
      </HStack>
    </VStack>
  );
}

function CoolText({ text }: { text: string }) {
  return (
    <Text
      {...{
        fontWeight: 700,
        fontSize: "302px",
        lineHeight: "365px",
        textTransform: "uppercase",
        background:
          "linear-gradient(180deg, #2C3344 0%, rgba(44, 51, 68, 0) 100%)",
        backgroundClip: "text",
        textFillColor: "transparent",
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
          background:
            "linear-gradient(180deg, #2F293C 0%, rgba(14, 16, 20, 0.39) 100%)",
        }}
      >
        {/* <Image src="/about/about1.png" layout="fill" alt="moon" /> */}
      </Stack>
    </VStack>
  );
}
