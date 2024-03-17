import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import { animated, useScroll, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Cloud1, Cloud2, Cloud3 } from "../../../lib/atoms/SVG/CustomIcons";
import StarsSVG, { TerrainSVG } from "../../../lib/atoms/SVG/WelcomeSVGs";

export default function Index() {
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

      <MountainAnimation />
      <TerrainAnimation />

      <IntroTexts />
    </VStack>
  );
}
export function ShootingStar({ n }: { n: number }) {
  // random integer number between 50 to 100
  const x = Math.floor(Math.random() * 100);
  return (
    <motion.div
      style={{
        position: "absolute",
        rotate: -45,
      }}
      initial={{
        y: `-10px`,
        x: `${x}vw`,
      }}
      animate={{
        opacity: [0.5, 1, 1, 1, 0],
        y: `calc(100vh + ${x * 1.1}vw)`,
        // 50px left from initial position
        x: `calc(${x}vw - 1550px)`,
      }}
      transition={{
        repeat: Infinity,
        repeateType: "loop",
        duration: 10 + n * 2,
        ease: "linear",
        delay: n * 2,
      }}
    >
      <Box
        {...{
          position: "relative",
        }}
      >
        {/* Star */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 5,
            height: 5,
            background: "white",
            borderRadius: "50%",
            boxShadow: "0 0 10px 2px white",
            zIndex: 1,
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        {/* Tail */}
        <Box
          {...{
            position: "absolute",
            bottom: "0px",
            left: 0,
            w: 100,
            h: 1,
          }}
          sx={{
            borderImage:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            borderImageSlice: 2,
            borderTop: "2px solid white",
            borderRadius: "full",
          }}
        />
      </Box>
    </motion.div>
  );
}

export function StarsAnimation() {
  const stars = Array.from({ length: 10 }, (_, i) => i);
  const { scrollYProgress } = useScroll();
  // inifinte rotation
  const yellowRotation = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 50000 },
  });
  const whiteStarRotation = useSpring({
    from: { rotate: 270 },
    to: { rotate: 360 + 270 },
    loop: true,
    config: { duration: 65000 },
  });
  const blueRotation = useSpring({
    from: { rotate: 180 },
    to: { rotate: 360 + 180 },
    loop: true,
    config: { duration: 70000 },
  });

  return (
    <Box
      position={"absolute"}
      top="0"
      left="0"
      zIndex={0}
      w="full"
      overflow={"hidden"}
      minH="100vh"
    >
      {stars.map((i, idx) => (
        <ShootingStar key={i} n={idx} />
      ))}
      <animated.div
        style={{
          // translateY: scrollYProgress.to([0, 1], [0, 100]),
          rotate: whiteStarRotation.rotate.to(r => r),
        }}
      >
        <Stack position={"absolute"}>
          <StarsSVG />
        </Stack>
        <Stack position={"absolute"} right="0">
          <StarsSVG />
        </Stack>
        <Stack position={"absolute"} top="-400">
          <StarsSVG />
        </Stack>
        <Stack position={"absolute"} right="0" top="0">
          <StarsSVG />
        </Stack>
      </animated.div>
      <animated.div
        style={{
          // translateY: scrollYProgress.to([0, 1], [0, 400]),
          rotate: yellowRotation.rotate.to(r => r),
        }}
      >
        <Stack left="150" top="350" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={1} />
        </Stack>
        <Stack right="130" top="250" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={1} />
        </Stack>
        <Stack left="250" top="-550" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={1} />
        </Stack>
        <Stack right="230" top="350" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={1} />
        </Stack>
      </animated.div>
      <animated.div
        style={{
          // translateY: scrollYProgress.to([0, 1], [0, 200]),
          rotate: blueRotation.rotate.to(r => r),
        }}
      >
        <Stack left="-330" top="150" position={"absolute"}>
          <StarsSVG color="#7EFFEA" r={1.2} />
        </Stack>
        <Stack right="330" top="150" position={"absolute"}>
          <StarsSVG color="#7EFFEA" r={1.2} />
        </Stack>
      </animated.div>
    </Box>
  );
}

export function IntroTexts() {
  const { scrollYProgress } = useScroll();
  return (
    <VStack
      zIndex={2}
      alignItems={{
        lg: "start",
        base: "center",
      }}
      width={"100%"}
      px={{
        base: "0",
        lg: "20",
      }}
    >
      <Box
        position="absolute"
        zIndex={1}
        top={"50px"}
        left={{
          lg: "50px",
        }}
        right={{
          lg: "0",
        }}
      >
        <Image src="/kb.svg" width={80} height={80} alt="hero" priority />
      </Box>
      <HStack
        w={"full"}
        justify={"space-between"}
        gap="10"
        flexDir={{
          base: "column-reverse",
          lg: "row",
        }}
        textAlign={{
          base: "center",
          lg: "start",
        }}
      >
        {/* TEXTS */}
        <MagnetWrapper>
          <animated.div
            style={{
              translateY: scrollYProgress.to([0, 1], [0, 600]),
            }}
          >
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
          </animated.div>
        </MagnetWrapper>
        {/* MOON */}
        <MagnetWrapper>
          <animated.div
            style={{
              translateY: scrollYProgress.to([0, 1], [0, 600]),
            }}
          >
            <Stack
              position="relative"
              boxSize={{
                base: "200px",
                lg: "280px",
              }}
              borderRadius={"100%"}
              overflow={"hidden"}
              zIndex={1}
              border={"10px solid #1c1c32"}
            >
              <Image src="/welcome/moon2.png" layout="fill" alt="moon" />
            </Stack>
          </animated.div>
        </MagnetWrapper>
      </HStack>
    </VStack>
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
