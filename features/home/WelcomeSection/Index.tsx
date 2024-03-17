import { Box, Stack, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Cloud1, Cloud2, Cloud3 } from "../../../lib/atoms/SVG/CustomIcons";
import { TerrainSVG } from "../../../lib/atoms/SVG/WelcomeSVGs";
import { IntroTexts } from "./IntroTexts";
import { StarsAnimation } from "./StarsAnimation";

export default function WelcomeSection() {
  return (
    <VStack
      as={motion.div}
      initial={{
        background: "linear-gradient(180deg, #000000 41.15%, #000000 100%);",
      }}
      bg="linear-gradient(180deg, #0C0D0F 41.15%, #205B6D 100%);"
      w="full"
      minH="100vh"
      justifyContent={"center"}
      position="relative"
    >
      <StarsAnimation />
      <CloudAnimation />

      <MoonAnimation />
      <MountainAnimation />
      <TerrainAnimation />
      <IntroTexts />
    </VStack>
  );
}

function MoonAnimation() {
  const { scrollYProgress } = useScroll();
  return (
    <Box
      position={"absolute"}
      pr={[0, "20"]}
      pb={[200, "20"]}
      alignItems={{
        base: "center",
        md: "end",
      }}
      justifyContent={{
        base: "center",
        md: "end",
      }}
      width={"100%"}
      display={"flex"}
    >
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 600]),
        }}
      >
        <MagnetWrapper>
          <Stack
            position="relative"
            width={[280, "420px"]}
            height={[280, "420px"]}
            borderRadius={"100%"}
            overflow={"hidden"}
            zIndex={1}
            transform={"scaleX(-1)"}
            border={"10px solid #1c1c32"}
            bottom={
              {
                // lg: "5vh",
                // base:'15vh'
              }
            }
            right={
              {
                // lg: "10vw",
                // base: "0",
              }
            }
          >
            <Image src="/me.jpg" layout="fill" alt="moon" />
          </Stack>
        </MagnetWrapper>
      </animated.div>
    </Box>
  );
}

export function MagnetWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 40, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
function CloudAnimation() {
  return (
    <Box
      {...{
        position: "absolute",
        bottom: "20vh",
        right: "35vw",
        zIndex: 4,
        display: { base: "none", xl: "grid" },
        gap: 10,
      }}
    >
      <Box position={"relative"} top="40px">
        <motion.div
          key="cloud3"
          animate={{
            x: [350, 200, 350],

            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              // delay: 2,
            },
          }}
        >
          <Cloud3 />
        </motion.div>
      </Box>
      <motion.div
        key="cloud2"
        animate={{
          x: [-50, 100, -50],
          transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            // delay: 2,
          },
        }}
      >
        <Cloud2 />
      </motion.div>
      <motion.div
        key="cloud1"
        animate={{
          x: [0, 100, 0],
          transition: {
            duration: 17,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <Cloud1 />
      </motion.div>
    </Box>
  );
}
function MountainAnimation() {
  const { scrollYProgress } = useScroll();
  return (
    <Stack
      right={{ base: 0, xl: 150 }}
      bottom={{
        base: 0,
        xl: "10px",
      }}
      position={"absolute"}
      zIndex="2"
    >
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 200]),
        }}
      >
        <Image
          src="/welcome/mountain.svg"
          width={904}
          height={382}
          alt="Mountain"
        />
      </animated.div>
    </Stack>
  );
}
function TerrainAnimation() {
  return (
    <Stack
      position={"absolute"}
      zIndex="3"
      bottom={{ base: -2, xl: -40 }}
      w="full"
    >
      <TerrainSVG />
    </Stack>
  );
}
