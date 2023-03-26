import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import { CoolText } from "../WorksSection/Index";

export default function SkillSection() {
  const { scrollYProgress } = useScroll();
  return (
    <VStack
      justifyContent={"space-between"}
      position="relative"
      minH="1000px"
      py="200px"
      w="full"
      bg="#212530"
    >
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-600, 200]),
            top: 200,
            position: "absolute",
          }}
        >
          <CoolText
            text="Skills"
            bg="linear-gradient(180deg, #0d111c 0%, rgba(44, 51, 68, 0) 100%)"
          />
        </animated.div>
        <HStack right="240" position="absolute" top="40" gap="100px">
          <SkillList
            title="Frontend"
            list={[
              "HTML",
              "CSS",
              "SASS/SCSS",
              "Vanilla Javascript",
              "Typescript",
              "Solidity",
              "React.js",
              "Next.js",
              "Jest",
              "React Testing Library",
              "React Query",
              "Redux",
            ]}
          />
          <SkillList
            title="Backend"
            list={[
              "HTML",
              "CSS",
              "SASS/SCSS",
              "Vanilla Javascript",
              "Typescript",
              "Solidity",
              "React.js",
              "Next.js",
              "Jest",
              "React Testing Library",
              "React Query",
              "Redux",
            ]}
          />
        </HStack>
      </HStack>
    </VStack>
  );
}

function SkillList({ title, list }: { title: string; list: any[] }) {
  return (
    <VStack position={"relative"} alignItems={"start"}>
      <Box position="relative">
        <Text
          color="white"
          fontSize={"24px"}
          position="relative"
          zIndex={1}
          fontWeight="700"
          textTransform={"uppercase"}
        >
          {title}
        </Text>
        <Box
          bg="#FFD12D"
          top="10px"
          h="3px"
          border={"none"}
          position="relative"
          zIndex={2}
          w="130px"
          mb="10"
        />
      </Box>
      <VStack
        position="relative"
        zIndex={1}
        spacing={0}
        w="full"
        alignItems="start"
      >
        {list.map(item => (
          <Text
            key={item}
            color="gray.500"
            cursor="pointer"
            transition={"all 0.2s ease-in-out"}
            _hover={{
              color: "gold",
            }}
            fontSize={"20px"}
            fontWeight="400"
            // textTransform={"uppercase"}
          >
            {item}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
