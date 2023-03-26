import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <VStack
      justifyContent={"space-between"}
      position="relative"
      minH="1200px"
      py="200px"
      w="full"
      bg="linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);"
    >
      <Stack position={"absolute"} right="0" zIndex={0}>
        <CoolText text="Testimonial" />
      </Stack>
      <VStack position={"relative"} w="full">
        <HStack position={"absolute"} zIndex={1} gap="200px" left="200px">
          <TestimonialItem
            text="Amazing Work As Always with Tanvir, very fast, reliant and proactive. Quality is also always there. He has the heart to do the work and will make things happen! I Highly recommend him 100%"
            name="Frank St-Jean"
            company="Decode"
          />
          <TestimonialItem
            text="Amazing Work As Always with Tanvir, very fast, reliant and proactive. Quality is also always there. He has the heart to do the work and will make things happen! I Highly recommend him 100%"
            name="Frank St-Jean"
            company="Decode"
          />
        </HStack>
        <HStack
          position={"absolute"}
          zIndex={1}
          gap="200px"
          top="280px"
          w="full"
          left="400px"
        >
          <TestimonialItem
            text="Amazing Work As Always with Tanvir, very fast, reliant and proactive. Quality is also always there. He has the heart to do the work and will make things happen! I Highly recommend him 100%"
            name="Frank St-Jean"
            company="Decode"
          />
          <TestimonialItem
            text="Amazing Work As Always with Tanvir, very fast, reliant and proactive. Quality is also always there. He has the heart to do the work and will make things happen! I Highly recommend him 100%"
            name="Frank St-Jean"
            company="Decode"
          />
        </HStack>
        <HStack
          position={"absolute"}
          zIndex={1}
          gap="200px"
          top="600px"
          left="600px"
          w="full"
        >
          <TestimonialItem
            text="Amazing Work As Always with Tanvir, very fast, reliant and proactive. Quality is also always there. He has the heart to do the work and will make things happen! I Highly recommend him 100%"
            name="Frank St-Jean"
            company="Decode"
          />
          <TestimonialItem
            text="Amazing Work As Always with Tanvir, very fast, reliant and proactive. Quality is also always there. He has the heart to do the work and will make things happen! I Highly recommend him 100%"
            name="Frank St-Jean"
            company="Decode"
          />
        </HStack>
      </VStack>
    </VStack>
  );
}

export function CoolText({ text }: { text: string }) {
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
      }}
      sx={{
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </Text>
  );
}

function TestimonialItem({
  name,
  company,
  text,
}: {
  name: string;
  company: string;
  text: string;
}) {
  return (
    <VStack position={"relative"} justifyContent="center" alignItems={"start"}>
      <HStack gap="32px">
        <Box width="82px" height="82px" position="relative">
          <Image
            src="/testimonial/frank.png"
            // width="82px"
            // height="82px"
            layout="fill"
            alt="moon"
          />
        </Box>
        <VStack alignItems={"start"} maxW="321px">
          <Text
            {...{
              fontSize: "14px",
              color: "#FFFFFF",
            }}
          >
            {text}
          </Text>
          <Text
            {...{
              fontSize: "14px",
              fontStyle: "italic",
              lineHeight: "29px",
              color: "#FFD12D",
            }}
          >
            {name}
          </Text>
          <Text
            {...{
              fontSize: "12px",
              color: "#BEBEBE",
            }}
          >
            {company}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
