import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {
    justifyContent: "space-between",
    position: "relative",
    minH: "1000px",
    py: "200px",
    w: "full",
    bg: "#212530",
  },
  skillListWrapper: {
    right: {
      base: "0",
      xl: "10vw",
    },
    w: "full",
    position: {
      base: "relative",
      xl: "absolute",
    },
    top: "40px",
    gap: {
      base: 10,
      xl: "100px",
    },

    px: {
      base: 6,
      md: 10,
      xl: 0,
    },
    display: {
      base: "grid",
      xl: "flex",
    },
    gridTemplateColumns: {
      base: "repeat(2, 1fr)",
      sm: "repeat(3, 1fr)",
      xl: "repeat(4, 1fr)",
    },
    placeItems: {
      base: "start",
      xl: "center",
    },
    justifyContent: "end",
  },
} as {
  [key: string]: StyleProps;
};
