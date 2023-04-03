import { HStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import CTAForm from "./CTAForm";

export default function CTASection() {
  const { scrollYProgress } = useScroll();
  return (
    <HStack
      justifyContent={"center"}
      position="relative"
      minH="1000px"
      w={"full"}
      px={[6, "20"]}
      py={["20"]}
      bg="#212530"
    >
      <HStack w="full" maxW={"1400px"} flexDir={["column", "row"]}>
        <CTAForm />

        <animated.div
          style={{
            y: scrollYProgress.to([0, 1], [-1100, 0]),
            zIndex: 0,
            position: "relative",
            paddingTop: "100px",
          }}
        >
          <Image
            src="/campfire.png"
            width={"1202px"}
            height={"1002px"}
            alt="moon"
          />
        </animated.div>
      </HStack>
    </HStack>
  );
}
