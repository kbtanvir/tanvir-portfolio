import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import StarsSVG from "../lib/atoms/SVG/WelcomeSVGs";

export default function App() {
  const { scrollYProgress } = useViewportScroll();

  const translate = useTransform(scrollYProgress, [1, 0], ["200px", "0px"]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <>
      <Box minH="300vh" bg="#0C0D0F ">
        <VStack
          bg="linear-gradient(180deg, #0C0D0F 41.15%, #205B6D 100%);"
          w="full"
          minH="100vh"
          justifyContent={"center"}
          position="relative"
        >
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              translateX: translate,
              translateY: translate,
              rotate: rotation,
            }}
          >
            <Stack position={"absolute"} left="0">
              <StarsSVG />
            </Stack>
            <Stack position={"absolute"} right="0">
              <StarsSVG />
            </Stack>
          </motion.div>
        </VStack>
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            translateX: translate,
            translateY: translate,
            rotate: rotation,
          }}
        >
          <Text fontSize={"50px"}>Scroll me</Text>
        </motion.div>
        {/* <Text
          fontSize={"50px"}
          position="fixed"
          // marginLeft={scrollY * 11 + "px"}
          // mt={scrollY * 11 + "px"}
        >
          Scroll me
        </Text> */}

        {/* <Text position={"fixed"} fontSize="50px">
          <code>{scrollY}</code>
        </Text> */}
      </Box>
    </>
  );
}
