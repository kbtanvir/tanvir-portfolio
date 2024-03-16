import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {},
  introText: {
    fontSize: {
      base: "20px !important",
      sm: "24px",
      md: "65px !important",
    },
    fontWeight: "600",
  },
  animatedTextWrapper: {
    css: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    // w: ["450px", "500px"],
    position: "relative",
  },
} as {
  [key: string]: StyleProps;
};
