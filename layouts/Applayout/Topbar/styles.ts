import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  topBar: {
    minH: { base: "60px", lg: "80px" },
    px: commonStyle.padding,
    bg: { base: "white" },
    borderBottom: "1px solid",
    borderColor: "gray.200",
    position: {
      base: "fixed",
    },
    justifyContent: "space-between",
    w: "full",
    zIndex: 999,
    gap: commonStyle.componentGap,
    boxShadow: "sm",
  },
  backArrow: {},
  logo: {
    width: "200px",
    h: "18px",
    alt: "",
  },
} as {
  [key: string]: StyleProps;
};
