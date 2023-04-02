import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const x = Math.floor(Math.random() * 120);

export function ShootingStar() {
  // random number between 0 and 120

  return (
    <>
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
          x: `calc(-${x * 1.1}vw)`,
        }}
        transition={{
          repeat: Infinity,
          repeateType: "loop",
          duration: 10,
          ease: "linear",
          delay: Math.random() * 10,
        }}
      >
        <Box
          {...{
            position: "absolute",
            top: "50%",
            left: "50%",
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
    </>
  );
}
