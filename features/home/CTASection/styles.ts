import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {
    justifyContent: "center",
    position: "relative",
    minH: "1000px",
    w: "full",
    px: [6, "20"],
    py: ["20"],
    bg: "#212530",
  },
  container: {
    w: "full",
    maxW: "1400px",
    flexDir: {
      base: "column",
      lg: "row",
    },
    gap: "20",
  },
  formWrapper: {
    w: "full",
    maxW: "500px",
    alignItems: "stretch",
    gap: "23px",
    position: "relative",
    zIndex: 1,
  },
} as {
  [key: string]: StyleProps;
};
