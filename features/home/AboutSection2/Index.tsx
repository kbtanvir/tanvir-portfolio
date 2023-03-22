import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function AboutSection2() {
  return (
    <HStack
      justifyContent={"space-between"}
      position="relative"
      minH="1000px"
      p="20"
      bg="#212530"
    >
      <Stack zIndex={2}>
        <Image
          src="/about/about1.png"
          width={"802px"}
          height={"802px"}
          alt="moon"
        />
      </Stack>
      <Stack maxW={"609px"}>
        <Text
          fontSize={"35px"}
          lineHeight="1.2"
          color="white"
          sx={{
            "& span": {
              color: "#FFD12D",
              fontSize: "35px",
              lineHeight: "1.2",
            },
          }}
        >
          Throughout my career, I`ve devoted considerable effort to transforming
          designs into applications and websites that are{" "}
          <span>
            precise, high-performing, easily accessible, and responsive
          </span>
          . I find the entire development process captivating and frequently
          involve myself in backend work. My passion for ambitious projects and
          positivity drives me, and I thrive in a collaborative and supportive
          work environment.
        </Text>
      </Stack>
    </HStack>
  );
}
