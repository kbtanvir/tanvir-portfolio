import { Box } from "@chakra-ui/react";
import { ShootingStar } from "../features/home/WelcomeSection/ShootingStar";
export default function Index() {
  const stars = Array.from({ length: 15 }, (_, i) => i);
  // framer motion transition

  return (
    <Box
      {...{
        position: "relative",
        w: "full",
        minH: "100vh",
        bg: "black",
      }}
    >
      {stars.map(i => {
        return <ShootingStar key={i} />;
      })}
    </Box>
  );
}
