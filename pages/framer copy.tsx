import { Box, Text } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useViewportScroll();

  const translate = useTransform(scrollYProgress, [1, 0], ["200px", "0px"]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <>
      <Box minH="300vh">
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
