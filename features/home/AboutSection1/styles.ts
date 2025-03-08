import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  grid: {
    position: "relative",
    minH: "1000px",
    w: "full",
    zIndex: "2",
    px: [6, "20"],
    pt: {
      base: "10vh",
      md: "20vh",
    },
    pb: {
      base: "10",
      lg: "40vh",
    },
    bg: "#212530",
  },
  textWrapper: {
    pt: {
      base: "4vh",
      md: 0,
    },
    position: "relative",
  },
  aboutText: commonStyle.aboutText,
  section: {
    marginBottom: "40px",
    padding: "20px",
    // backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: {
      base: "24px !important",
      md: "28px !important",
    },
    color: "#2c3e50",
    marginBottom: "20px",
    borderBottom: "2px solid #3498db",
    display: "inline-block",
    paddingBottom: "5px",
  },
  paragraph: {
    fontSize: {
      base: "16px !important",
      md: "18px !important",
    },
    color: "#555",
    marginBottom: "15px",
    "& strong": {
      color: "#2c3e50",
    },
  },
  skillsList: {
    listStyleType: "none",
    padding: "0",
    "& li": {
      fontSize: {
        base: "16px !important",
        md: "18px !important",
      },
      color: "#555",
      marginBottom: "10px",
      paddingLeft: "20px",
      position: "relative",
      "&::before": {
        content: '"▹"',
        position: "absolute",
        left: "0",
        color: "#3498db",
        fontSize: "14px",
      },
      "& strong": {
        color: "#2c3e50",
      },
    },
  },
  imageWrapper: {
    position: "relative",
    placeItems: "end",
    justifySelf: "end",
    bottom: {
      base: "-5em",
      lg: "-40vh",
    },
    right: {
      base: "-5vw",
      lg: "5vw",
      //   xl: 0,
    },
  },

  skyWrapper: {
    position: "relative",
    h: {
      base: "80vw",
      lg: "600px",
    },
    w: {
      base: "80vw",
      lg: "600px",
    },
    right: {
      base: "0em",
    },
    bottom: {
      base: "-0",
      lg: "10",
    },
  },
  mountainWrapper: {
    position: "absolute",
    height: {
      base: "calc(100vw * .264)",
      lg: "264px",
    },
    width: {
      base: "calc(100vw * .475)",
      lg: "475px",
    },

    bottom: {
      base: "2em",
    },
    right: {
      base: "40vw",
      lg: "6em",
    },
  },
  boyWrapper: {
    position: "absolute",
    height: {
      base: "calc(100vw * .663 * 1.2)",
      lg: "calc(100vw * .663 * 0.75 )",
      xl: "663px",
    },
    width: {
      base: "calc(100vw * .827 * 1.2)",
      lg: "calc(100vw * .827 * 0.75 )",
      xl: "827px",
    },

    right: {
      base: "-25vw",
      xl: "-20em",
    },
    bottom: {
      base: "-0",
      lg: "-0",
      xl: "-0",
    },
  },
} as {
  [key: string]: StyleProps;
};
