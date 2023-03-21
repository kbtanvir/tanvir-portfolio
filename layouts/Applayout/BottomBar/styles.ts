import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  bottomBar: {
    h: "60px",
    px: commonStyle.padding,
    bg: "green.500",
    borderBottom: "1px solid",
    borderColor: "gray.50",
    position: "fixed",
    justifyContent: "space-between",
    w: "full",
    zIndex: 999,
    bottom: -1,
    gap: commonStyle.componentGap,
    boxShadow: "0px -1px 10px 0px rgba(0,0,0,0.55)",
    display: {
      base: "flex",
      xl: "none",
    },
  },
} as {
  [key: string]: StyleProps;
};
