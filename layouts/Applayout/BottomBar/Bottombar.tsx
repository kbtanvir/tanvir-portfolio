import { Box, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiCart, BiCycling, BiHome, BiUser } from "react-icons/bi";
import { useCartStore } from "../../../features/cart/logic/store";
import { AppRoutes } from "../../../lib/routes/AppRoutes";
import { styles } from "./styles";

export function BottomBar() {
  const { push } = useRouter();
  const { total } = useCartStore();
  return (
    <HStack {...styles.bottomBar}>
      {[
        {
          icon: <BiHome size={25} />,
          onClick: () => {
            return push(AppRoutes.Category.baseURL);
          },
        },
        {
          icon: <BiCycling size={25} />,
          onClick: () => {
            return push(AppRoutes.Orders.baseURL);
          },
        },
        {
          icon: <BiCart size={25} />,
          onClick: () => {
            return push(AppRoutes.Cart.baseURL);
          },
        },
        {
          icon: <BiUser size={25} />,
          onClick: () => {
            return push(AppRoutes.User.profile);
          },
        },
      ].map((item, i) => (
        <Box
          key={i}
          cursor={"pointer"}
          onClick={item.onClick}
          position="relative"
        >
          {i === 2 && total !== 0 && (
            <Box
              {...{
                bg: "red.500",
                color: "white",
                borderRadius: "10px",
                fontSize: "xs",
                fontWeight: "bold",
                position: "absolute",
                top: "-10px",
                right: "-30px",
                px: "2",
              }}
            >
              {total.toFixed(3)}
            </Box>
          )}
          {item.icon}
        </Box>
      ))}
    </HStack>
  );
}
