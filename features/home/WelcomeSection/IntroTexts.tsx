import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { MagnetWrapper } from "./Index";

export function IntroTexts() {
  return (
    <VStack zIndex={5} alignItems={"start"} alignSelf="start" pl={[6, "20"]}>
      <Box
        position="absolute"
        zIndex={1}
        display="flex"
        alignSelf={"start"}
        justifySelf={"start"}
        top={"50px"}
      >
        <Image src="/kb.svg" width={80} height={80} alt="hero" priority />
      </Box>
      <Box>
        <MagnetWrapper>
          <Heading
            fontSize={"100px"}
            textColor={"white"}
            textTransform={"uppercase"}
          >
            K. B. TANVIR
          </Heading>
          <Heading
            fontSize={"46px"}
            textColor={"white"}
            fontWeight={"thin"}
            lineHeight={""}
          >
            Software Engineer
          </Heading>
        </MagnetWrapper>
      </Box>
    </VStack>
  );
}
