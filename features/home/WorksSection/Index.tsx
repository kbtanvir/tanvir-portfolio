import { Box, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineFileText, AiOutlineLink } from "react-icons/ai";
import { StarsAnimation } from "../Welcome/StarsAnimation";
import { IWorkData, worksData } from "./data";

export default function WorksSection() {
  const { scrollYProgress } = useScroll();
  return (
    <VStack
      justifyContent={"space-between"}
      position="relative"
      minH="1200px"
      pt="200px"
      pb="200"
      w="full"
      bg="linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);"
    >
      <StarsAnimation />
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [100, 500]),
            top: 0,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <HStack gap="600px">
            <ProjectItem
              title={worksData[0].title}
              imageURL={worksData[0].imageURL}
            />
            <ProjectItem
              title={worksData[1].title}
              imageURL={worksData[1].imageURL}
            />
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
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-800, 1300]),
            top: -200,
            position: "absolute",
          }}
        >
          <CoolText text="To" />
        </animated.div>
        <animated.div
          style={{
            right: scrollYProgress.to([0, 1], [200, 1000]),
            top: 0,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <HStack gap="600px">
            <ProjectItem
              title={worksData[2].title}
              imageURL={worksData[2].imageURL}
            />
            <ProjectItem
              title={worksData[3].title}
              imageURL={worksData[3].imageURL}
            />
          </HStack>
        </animated.div>
      </HStack>
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-0, 500]),
            top: 0,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <HStack gap="600px">
            <ProjectItem
              title={worksData[4].title}
              imageURL={worksData[4].imageURL}
            />
            <ProjectItem
              title={worksData[5].title}
              imageURL={worksData[5].imageURL}
            />
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

export function CoolText({ text, bg }: { text: string; bg?: string }) {
  return (
    <Text
      {...{
        fontWeight: 700,
        fontSize: "302px",
        lineHeight: "365px",
        textTransform: "uppercase",
        background:
          bg || "linear-gradient(180deg, #2C3344 0%, rgba(44, 51, 68, 0) 100%)",
        backgroundClip: "text",
      }}
    >
      {text}
    </Text>
  );
}

function ProjectItem({
  title,
  imageURL: featuredImage,
  liveUrl,
  pageUrl,
}: Partial<IWorkData>) {
  const [hover, sethover] = useState(false);
  return (
    <VStack
      position={"relative"}
      justifyContent="center"
      alignItems={"start"}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      <animated.div
        style={{
          transform: hover ? "translateX(0px)" : "translateX(-50px)",
          transition: "all 0.7s ease-in-out",
          // transitionDelay: "0.6s",
          background: hover ? "rgba(0, 0, 0, 0.7)" : "transparent",
          backdropFilter: hover ? "blur(10px)" : "none",
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          height: "140px",
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
        >
          {title}
        </Text>

        <Box
          bg="#FFD12D"
          h="3px"
          border={"none"}
          position="relative"
          zIndex={2}
          w="100px"
          mb="10px"
          // opacity={hover ? 1 : 0}
          transition={"all 0.3s ease-in"}
          transitionDelay="0.3s"
          // transform={hover ? "translateX(-32px)" : "translateX(-0px)"}
        />
        <animated.div
          style={{
            left: "0px",
            opacity: hover ? 1 : 0,
            transition: "all 0.3s ease-in",
            transitionDelay: "0.6s",
            display: "flex",
            gap: "20px",
          }}
        >
          {[
            {
              icon: AiOutlineFileText,
              url: pageUrl || "",
            },
            {
              icon: AiOutlineLink,
              url: liveUrl || "",
            },
          ].map((item, i) => (
            <Link target="_blank" href={item.url} key={i}>
              <Icon
                as={item.icon}
                color={"white"}
                fontSize={"20px"}
                cursor="pointer"
                transition={"all 0.3s ease-in"}
                _hover={{ color: "gold", transform: "scale(1.2)" }}
              />
            </Link>
          ))}
        </animated.div>
      </animated.div>
      <Stack
        {...{
          width: "487px",
          height: "276px",
          position: "absolute",
          zIndex: 0,
          borderRadius: "10px",
          overflow: "hidden",
          transform: hover ? "translateX(-0px)" : "translateX(40px)",
          transition: "all 0.9s ease-in-out",
        }}
      >
        <Box
          {...{
            width: "full",
            height: "full",
            position: "absolute",
            zIndex: 1,
            background: `linear-gradient(180deg, rgb(9 8 20 / 86%) 0%, rgb(0 0 0 / 24%) 100%)`,
            opacity: hover ? 0 : 1,
            left: "0",
            transform: hover ? "translateY(-600px)" : "translateY(0)",
            transition: "transform 0.3s ease-in-out, opacity 0.6s ease-in-out",
            backdropFilter: "blur(1px)",
          }}
        />

        <Image
          src={featuredImage ? `/images/works/${featuredImage}` : ""}
          layout="fill"
          alt="moon"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
      </Stack>
    </VStack>
  );
}
