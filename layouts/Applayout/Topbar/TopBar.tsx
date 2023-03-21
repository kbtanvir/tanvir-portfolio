import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { BiCart, BiLeftArrowAlt } from "react-icons/bi";
import { useCartStore } from "../../../features/cart/logic/store";
import IconButton from "../../../lib/atoms/IconButton/IconButton";
import { AppRoutes } from "../../../lib/routes/AppRoutes";
import { TextVariant } from "../../../lib/theme/components/Text";
import { styles } from "./styles";

export function TopBar({
  title,
  simplified,
}: {
  title: string;
  simplified?: boolean;
}) {
  const { back } = useRouter();
  const { total } = useCartStore();
  return (
    <>
      <HStack {...styles.topBar}>
        <HStack>
          <Box
            cursor={"pointer"}
            onClick={() => {
              return back();
            }}
          >
            <IconButton>
              <BiLeftArrowAlt />
            </IconButton>
          </Box>
          {!simplified && (
            <Image
              display={{
                base: "none",
                lg: "block",
              }}
              pl="10"
              pb="1"
              src="/logo.svg"
              alt="logo"
              width={180}
              objectFit="contain"
            />
          )}
        </HStack>
        <VStack>
          <Text variant={TextVariant.heading2}>{title}</Text>
        </VStack>
        <span>
          {!simplified && (
            <Box
              cursor={"pointer"}
              onClick={() => Router.push(AppRoutes.Cart.baseURL)}
              position="relative"
              right="40px"
              display={{ base: "none", lg: "block" }}
            >
              {total !== 0 && (
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
              <BiCart size={25} />
            </Box>
          )}
        </span>
      </HStack>
    </>
  );
}
