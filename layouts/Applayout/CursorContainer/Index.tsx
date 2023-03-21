import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect, useRef, useState } from "react";
import { magnetic } from "../../../lib/cuberto/magnetic";
import {
  cupertinoStore,
  useCupertinoStore,
} from "../../../lib/utils/global.store";
import { styles } from "./styles";

export default function CursorContainer() {
  const { cursor } = useCupertinoStore();
  const parentRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    magnetic.init();

    if (!parentRef.current || !elRef.current) return console.log("nope");

    const c = new MouseFollower({
      // container: parentRef.current,
      el: elRef.current,
      iconSvgSrc: "/favicon.svg",
      speed: 1.3,
    });

    cupertinoStore.setCursor(c);

    return () => {};
  }, []);

  return (
    <Box sx={styles.containerEffects} ref={parentRef} {...styles.container}>
      <Box ref={elRef} {...styles.cursor}></Box>
      <Grid templateColumns="repeat(2, 1fr)" gap="10" p="10" w="100%">
        {["red.300", "green.300", "blue.300", "yellow.300"].map(i => (
          <HStack
            key={i}
            onMouseEnter={() => cursor?.addState("reverse")}
            onMouseLeave={() => cursor?.removeState("reverse")}
            {...styles.box}
            bg={i}
          >
            <Text className="magnetic" w="60" h="60" bg="gray.400">
              Hover Me
            </Text>
          </HStack>
        ))}
      </Grid>
    </Box>
  );
}
