import { Center } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "./1.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function Preloader({ children }: { children: any }) {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          key="loading"
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </AnimatePresence>
  );
}

function LoadingScreen() {
  return (
    <Center
      {...{
        height: "100vh !important",
        bg: "black",
      }}
    >
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={false}
        isPaused={false}
        {...{
          speed: 5,
        }}
      />
    </Center>
  );
}
