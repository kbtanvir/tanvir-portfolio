import { Spinner } from "@chakra-ui/react";

export default function CustomSpinner() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color={"orange.500"}
      size="xl"
    />
  );
}
