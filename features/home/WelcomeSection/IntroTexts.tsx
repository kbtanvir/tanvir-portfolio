import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroTexts() {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const element = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <VStack
      as={motion.div}
      variants={container}
      zIndex={5}
      alignItems={"start"}
      alignSelf="start"
      pl={[6, "20"]}
      initial="hidden"
      animate="show"
    >
      <Text
        color="white"
        fontSize={[35, 45]}
        fontWeight="700"
        {...{
          position: "absolute",
          top: [2, 10],
        }}
      >
        Logo
      </Text>

      <HStack justifyContent={"start"} alignItems="start" overflow={"hidden"}>
        {["Hi,", "my name is", "Tanvir"].map((text, i) => (
          <motion.div
            variants={element}
            key={i}
            transition={{
              duration: 0.8,
            }}
          >
            <Text
              pr="4"
              color={i === 2 ? "white" : "gold"}
              fontSize={[25, 45]}
              fontWeight="700"
            >
              {text}
            </Text>
          </motion.div>
        ))}
      </HStack>
      <HStack overflow={"hidden"}>
        <motion.div
          variants={element}
          transition={{
            duration: 0.8,
          }}
        >
          <Text color="white" fontSize={[25, 45]} fontWeight="700">
            I make
          </Text>
        </motion.div>
        <motion.div
          variants={element}
          transition={{
            duration: 0.8,
          }}
        >
          <TextSwitchAnimation />
        </motion.div>
      </HStack>
    </VStack>
  );
}

const texts = ["Mobile app", "Web app", "Motion graphics", "UI/UX"];
const AnimatedText = motion(Box);

export function TextSwitchAnimation() {
  const variants = {
    initial: { y: "100%", x: "10px" },
    visible: { y: "-18%" },
    hidden: { y: "-100%" },
  };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const switchToNextText = () => {
    setCurrentTextIndex(
      currentTextIndex => (currentTextIndex + 1) % texts.length
    );
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      intervalId = setInterval(switchToNextText, 2500);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box
      overflowY={"hidden"}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      w={[210, "500px"]}
      height={["30px", 45]}
      position={"relative"}
      top="3px"
    >
      <AnimatePresence exitBeforeEnter>
        <AnimatedText
          color="#3ee1e2"
          fontSize={[25, 40]}
          fontWeight="700"
          variants={variants}
          initial="initial"
          animate="visible"
          exit="hidden"
          key={texts[currentTextIndex]}
          transition={{
            duration: 0.5,
          }}
        >
          {texts[currentTextIndex]}
        </AnimatedText>
      </AnimatePresence>
    </Box>
  );
}