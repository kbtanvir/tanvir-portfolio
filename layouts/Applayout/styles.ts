import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../lib/theme/consts/commonStyle.const";

export const styles = {
  contentWrapper: {
    flex: 1,
    alignItems: "stretch",
    position: "relative",
    justifyContent: "start",
    overflow: "hidden",
    bg: "white",
    gap: commonStyle.componentGap,
    minH: "100vh",
    px: {
      base: 4,
      xl: 0,
    },
  },
} as {
  [key: string]: StyleProps;
};
