import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {},
  introText: {
    fontSize: {
      base: "20px !important",
      sm: "24px",
      md: "45px !important",
    },
    fontWeight: "700",
  },
  animatedTextWrapper: {
    css: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    w: ["250px", "500px"],
    position: "relative",
  },
} as {
  [key: string]: StyleProps;
};
