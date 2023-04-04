import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  grid: {
    position: "relative",
    minH: "1000px",
    w: "full",
    zIndex: "2",
    px: {
      base: 6,
      md: 10,
      xl: 0,
    },
    pt: {
      base: "0",
      xl: "20vh",
    },

    justifyItems: "center",

    pb: {
      base: "40vh",
      xl: "40vh",
    },
    bg: "#212530",
    templateColumns: {
      base: "1fr",
      xl: "1fr 2fr",
    },
  },
  textWrapper: {
    pt: {
      base: "4vh",
      xl: 0,
    },
    pl: {
      base: "0",
      xl: "10vw",
    },
    position: "relative",
  },
  aboutText: {
    fontSize: commonStyle.font35,
    lineHeight: "1.2",
    color: "white",
    textAlign: "left",

    sx: {
      "& span": {
        color: "#FFD12D",
        fontSize: commonStyle.font35,
        lineHeight: "1.2",
        pl: "2",
      },
    },
  },

  imageWrapper: {
    zIndex: "2",
    position: "relative",
    top: [-20, 0],

    width: {
      base: "80vw",
      md: "50vw",
      xl: "37em",
    },
    height: {
      base: "80vw",
      md: "50vw",
      xl: "37em",
    },
  },
} as {
  [key: string]: StyleProps;
};
