import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import { CoolText } from "../../../lib/atoms/CoolText/CoolText";
import { StarsAnimation } from "../Welcome/StarsAnimation";
import { ITestimonial, testimonialData } from "./data";

export default function TestimonialSection() {
  const { scrollYProgress } = useScroll();

  return (
    <VStack
      justifyContent={"space-between"}
      position="relative"
      minH="1200px"
      py={[0, "200px"]}
      w="full"
      bg="linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);"
    >
      <StarsAnimation />
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [-200, 600]),
          translateX: scrollYProgress.to([0, 1], [-500, 600]),
          position: "absolute",
          top: "0",
          zIndex: 0,
        }}
      >
        <CoolText
          bg={"linear-gradient(180deg, #2C3344 0%, rgba(44, 51, 68, 0) 100%)"}
          text="Testimonial"
        />
      </animated.div>

      <VStack position={"relative"} w="full">
        <HStack
          position={["static", "absolute"]}
          zIndex={1}
          gap={[0, "200px"]}
          left="200px"
          flexDir={["column", "row"]}
          w="full"
        >
          <TestimonialItem data={testimonialData[0]} />
          <TestimonialItem data={testimonialData[1]} />
        </HStack>
        <HStack
          position={["static", "absolute"]}
          zIndex={1}
          gap={[10, "200px"]}
          top="280px"
          w="full"
          left="400px"
          flexDir={["column", "row"]}
        >
          <TestimonialItem data={testimonialData[2]} />
          <TestimonialItem data={testimonialData[3]} />
        </HStack>
        <HStack
          position={["static", "absolute"]}
          zIndex={1}
          gap={[10, "200px"]}
          top="600px"
          left="600px"
          w="full"
          flexDir={["column", "row"]}
        >
          <TestimonialItem data={testimonialData[4]} />
          <TestimonialItem data={testimonialData[5]} />
        </HStack>
      </VStack>
    </VStack>
  );
}

function TestimonialItem({ data }: { data: Partial<ITestimonial> }) {
  return (
    <VStack
      position={"relative"}
      justifyContent="center"
      alignItems={"start"}
      p={[6, 0]}
    >
      <HStack gap={["6", "32px"]} alignItems={["start"]}>
        <Box
          width={[50, "82px"]}
          height={[50, "82px"]}
          position="relative"
          top="1"
        >
          <Image
            src={`/images/testimonial/${data.image}`}
            // width="82px"
            // height="82px"
            layout="fill"
            alt="moon"
          />
        </Box>
        <VStack alignItems={"start"} maxW={[200, "321px"]} w="full">
          <Text
            {...{
              fontSize: "14px",
              color: "#FFFFFF",
            }}
          >
            {data.text}
          </Text>
          <Text
            {...{
              fontSize: "14px",
              fontStyle: "italic",
              lineHeight: "29px",
              color: "#FFD12D",
            }}
          >
            {data.name}
          </Text>
          <Text
            {...{
              fontSize: "12px",
              color: "#BEBEBE",
            }}
          >
            {data.company}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
