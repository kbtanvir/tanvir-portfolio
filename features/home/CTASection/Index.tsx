import { HStack, Stack } from "@chakra-ui/react";
import Image from "next/image";
import CTAForm from "./CTAForm";

export default function CTASection() {
  return (
    <HStack
      justifyContent={"space-between"}
      position="relative"
      minH="1000px"
      p="20"
      bg="#212530"
    >
      <CTAForm />
      <Stack zIndex={2}>
        <Image
          src="/campfire.png"
          width={"802px"}
          height={"802px"}
          alt="moon"
        />
      </Stack>
    </HStack>
  );
}
