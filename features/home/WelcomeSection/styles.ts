import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {},
  introText: {
    fontSize: {
      base: "25px !important",
      md: "45px !important",
    },
    fontWeight: "700",
  },
  animatedTextWrapper: {
    overflowY: "hidden",
    css: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    w: [210, "500px"],
    height: ["30px", 45],
    position: "relative",
    top: {
      base: "4px",
      md: "3px",
    },
  },
} as {
  [key: string]: StyleProps;
};
