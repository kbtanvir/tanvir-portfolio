import { StyleProps } from "@chakra-ui/react";

export const styles = {
  "& .-opaque": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },

  cursor: {
    top: "-50",
    left: "-50",
    position: "absolute",
    w: "20",
    h: "20",
    scale: 1,
    transition: "background-color .2s ease-in-out, opacity .3s",
    transitionProperty: "background-color, scale",
    bg: "white",
    borderRadius: "full",
    pointerEvents: "none",
    zIndex: 9999,
  },

  box: {
    w: "100%",
    h: "400px",
    borderRadius: "md",
    boxShadow: "md",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: 9999,
    top: 0,
    left: 0,
    bg: "blue.900",
    color: "white",
  },
  containerEffects: {
    "& .reverse": {
      transform: "scale(2.5)",
      backgroundBlendMode: "multiply",
      bg: "green.500",
    },
  },
} as {
  [key: string]: {
    [key: string]: StyleProps;
  };
};
