import { HStack, Text } from "@chakra-ui/react";

export default function WorksSection() {
  return (
    <HStack
      justifyContent={"space-between"}
      position="relative"
      minH="1000px"
      bg="linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);"
    >
      <HStack>
        <CoolText text="live" />
      </HStack>
    </HStack>
  );
}

function CoolText({ text }: { text: string }) {
  return <Text>{text}</Text>;
}
