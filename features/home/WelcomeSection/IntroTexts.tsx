import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { MagnetWrapper } from "./Index";

export function IntroTexts() {
  return (
    <VStack
      zIndex={5}
      alignItems={{
        lg: "start",
        base: "center",
      }}
      width={"100%"}
      justifyContent={{
        lg: "start",
        base: "center",
      }}
      pl={{
        base: "0",
        lg: "20",
      }}
    >
      <Box
        position="absolute"
        zIndex={1}
        top={"50px"}
        left={{
          // lg: "10vw",
          lg: "50px",
        }}
        right={{
          // lg: "10vw",
          lg: "0",
        }}
      >
        <Image src="/kb.svg" width={80} height={80} alt="hero" priority />
      </Box>
      <Box
        pt={{
          base: "20vh",
          // md: "30vh",
          lg: "0",
        }}
      >
        <MagnetWrapper>
          <Heading
            fontSize={["30px", "40px", "100px"]}
            textColor={"white"}
            textTransform={"uppercase"}
          >
            K. B. TANVIR
          </Heading>
          <Heading
            fontSize={["20px", "30px", "50px"]}
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
