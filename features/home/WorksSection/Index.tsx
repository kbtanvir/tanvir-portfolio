import {
  Box,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { CoolText } from "../../../lib/atoms/CoolText/CoolText";
import { CustomDrawer } from "../../../lib/atoms/Drawer/CustomDrawer";
import { StarsAnimation } from "../Welcome/StarsAnimation";
import { IWorkData, worksData } from "./data";

const commonStyles = {
  projectGap: [6, "800px"],
};

export default function WorksSection() {
  const { scrollYProgress } = useScroll();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <VStack
      justifyContent={["space-between"]}
      position="relative"
      minH={["240vh", "1200px"]}
      zIndex={2}
      pt="200px"
      pb={["200"]}
      w="full"
      bg="linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);"
    >
      <StarsAnimation />
      {/* ROW 1 */}
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            x: isLargerThan500 ? scrollYProgress.to([0, 1], [100, 500]) : 0,
            top: 0,
            position: "absolute",
            zIndex: 1,
            width: "100%",
          }}
        >
          <HStack
            gap={commonStyles.projectGap}
            flexDir={["column", "row"]}
            w={["full", "auto"]}
          >
            <ProjectItem item={worksData[0]} />
            <ProjectItem item={worksData[1]} />
          </HStack>
        </animated.div>
        <animated.div
          style={{
            right: scrollYProgress.to([0, 1], [-800, 1300]),
            top: -200,
            position: "absolute",
          }}
        >
          <CoolText text="Live" />
        </animated.div>
      </HStack>
      {/* ROW 2 */}
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-800, 1300]),
            top: -200,
            position: "absolute",
            width: "100%",
          }}
        >
          <CoolText text="To" />
        </animated.div>
        <animated.div
          style={{
            right: isLargerThan500
              ? scrollYProgress.to([0, 1], [200, 1000])
              : 0,
            top: 0,
            position: "absolute",
            zIndex: 1,
            width: "100%",
          }}
        >
          <HStack
            gap={commonStyles.projectGap}
            flexDir={["column", "row"]}
            w={["full", "auto"]}
            alignItems={["start", "flex-start"]}
          >
            <ProjectItem item={worksData[2]} />
            <ProjectItem item={worksData[3]} />
          </HStack>
        </animated.div>
      </HStack>
      {/* ROW 3 */}
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: isLargerThan500 ? scrollYProgress.to([0, 1], [-0, 500]) : 0,
            top: 0,
            position: "absolute",
            zIndex: 1,
            width: "100%",
          }}
        >
          <HStack gap={commonStyles.projectGap}>
            <ProjectItem item={worksData[4]} />
            {/* <ProjectItem item={worksData[5]} /> */}
          </HStack>
        </animated.div>
        <animated.div
          style={{
            right: scrollYProgress.to([0, 1], [-800, 500]),
            top: -200,
            position: "absolute",
          }}
        >
          <CoolText text="Work" />
        </animated.div>
      </HStack>
    </VStack>
  );
}

function ProjectItem({ item }: { item: Partial<IWorkData> }) {
  const [hover, sethover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomDrawer
        isOpen={isOpen}
        onClose={onClose}
        body={<SingleItemModal item={item} />}
      />
      <VStack
        onClick={onOpen}
        cursor={"pointer"}
        position={"relative"}
        justifyContent="center"
        alignItems={"start"}
        w={["full", "auto"]}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        px={[6, 0]}
      >
        <Box
          {...{
            transform: hover
              ? "translateX(0px)"
              : ["translateX(0px)", "translateX(-50px)"],
            transition: "all 0.7s ease-in-out",
            zIndex: 2,
            background: hover ? "rgba(0, 0, 0, 0.7)" : "transparent",
            backdropFilter: hover ? "blur(10px)" : "none",
            position: "absolute",
            minW: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
            paddingBottom: "30px",
            paddingRight: "30px",
          }}
        >
          <Text
            color="white"
            fontSize={"24px"}
            position="relative"
            zIndex={1}
            fontWeight="700"
            textTransform={"uppercase"}
            pb="3"
          >
            {item.title}
          </Text>

          <Box
            bg="#FFD12D"
            h="3px"
            border={"none"}
            position="relative"
            zIndex={2}
            w="100px"
            mb="10px"
            transition={"all 0.3s ease-in"}
            transitionDelay="0.3s"
          />
        </Box>
        <Stack
          {...{
            width: ["100%", "487px"],
            height: "276px",
            position: ["relative", "absolute"],
            zIndex: 0,
            borderRadius: "10px",
            overflow: "hidden",
            transform: hover
              ? "translateX(-0px)"
              : ["translateX(0px)", "translateX(40px)"],
            transition: "all 0.9s ease-in-out",
          }}
        >
          <Box
            {...{
              width: "101%",
              height: "101%",
              position: "absolute",
              zIndex: 1,
              background: `linear-gradient(180deg, rgb(9 8 20 / 86%) 0%, rgb(0 0 0 / 24%) 100%)`,
              opacity: hover ? 0 : 1,
              left: ["0", "-1"],
              top: "-1",
              transform: hover ? "translateY(-600px)" : "translateY(0)",
              transition:
                "transform 0.3s ease-in-out, opacity 0.6s ease-in-out",
            }}
          />

          <Image
            src={item.imageURL ? `/images/works/${item.imageURL}` : ""}
            layout="fill"
            alt="moon"
            objectFit="cover"
            objectPosition="center"
            style={{
              zIndex: 0,
            }}
          />
        </Stack>
      </VStack>
    </>
  );
}

function SingleItemModal({ item }: { item: Partial<IWorkData> }) {
  return (
    <VStack w="full" justifyContent={"start"} alignItems={"start"} gap="4">
      {/* IMAGE */}
      <Box position="relative" height="300px" w="full">
        <Image
          style={{ borderRadius: "10px" }}
          src={item.imageURL ? `/images/works/${item.imageURL}` : ""}
          layout="fill"
          alt="moon"
          objectFit="cover"
        />
      </Box>
      <HStack pt="4">
        {item.skills!.map((text, i) => (
          <Tag key={i} variant="outline" size="lg" mr="2" color="gold">
            {text}
          </Tag>
        ))}
      </HStack>
      <Link target="_blank" href={item.liveUrl} _focus={{ outline: "none" }}>
        <>
          <HStack
            pt="4"
            cursor="pointer"
            _hover={{ color: "gold", transform: "scale(1.2)" }}
            transition={"all 0.3s ease-in"}
          >
            <Icon
              as={AiOutlineLink}
              color={"white"}
              fontSize={"20px"}
              cursor="pointer"
            />
            <Text color="white" fontSize={"20px"} display="inline">
              Live demo
            </Text>
          </HStack>
        </>
      </Link>

      {/* TITLE */}
      <Text color="Gold" fontSize={"24px"} textTransform={"capitalize"}>
        {item.title}
      </Text>
      <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
      <Text color="white" fontSize={"16px"}>
        {item.overview}
      </Text>
      {/* RESULTS */}
      {item.results!.length > 0 && (
        <>
          <Text color="white" fontSize={"24px"}>
            Results
          </Text>
          <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
          <VStack alignItems={"start"}>
            {item.results?.map((result, i) => (
              <Text color="white" fontSize={"16px"} key={i}>
                ✅ {result}
              </Text>
            ))}
          </VStack>
        </>
      )}
      {/* Challenges */}
      {item.challenges!.length > 0 && (
        <>
          <Text color="white" fontSize={"24px"}>
            Challenges
          </Text>
          <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
          <VStack alignItems={"start"}>
            {item.challenges?.map((result, i) => (
              <Text color="white" fontSize={"16px"} key={i}>
                🟥 {result}
              </Text>
            ))}
          </VStack>
        </>
      )}
      {/* RESULTS */}
      <Text color="white" fontSize={"24px"}>
        Solutions
      </Text>
      <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
      <VStack alignItems={"start"}>
        {item.solution?.map((result, i) => (
          <Text color="white" fontSize={"16px"} key={i}>
            🟩 {result}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
