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
    justifyContent: "space-between",
  },
  formWrapper: {
    w: "full",
    maxW: "500px",
    alignItems: "stretch",
    gap: "23px",
    position: "relative",
    zIndex: 1,
  },
  formTitle: {
    fontSize: {
      base: "25px !important",
      md: "45px !important",
    },
    fontWeight: "700",
  },
  rightImage: {
    paddingTop: {
      base: "20px",
      xl: "100px",
    },
    position: "relative",
  },
  footerText:{
    
  }
} as {
  [key: string]: StyleProps;
};
