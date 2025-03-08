import { Box, HStack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import { CoolText } from "../../../lib/atoms/CoolText/CoolText";
import { piStyle } from "../WorksSection/styles";
import { styles } from "./styles";

export default function SkillSection() {
  const { scrollYProgress } = useScroll();
  const [lg] = useMediaQuery("(min-width: 1024px)");
  return (
    <VStack {...styles.sectionWrapper}>
      {!lg && (
        <VStack {...styles.sectionTitleWrapper}>
          <Text {...styles.sectionTitle}>Skills</Text>
          <Box {...piStyle.underline} />
        </VStack>
      )}
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-600, 200]),
            top: 200,
            position: "absolute",
          }}
        >
          <CoolText
            text="Skills"
            bg="linear-gradient(180deg, #0d111c 0%, rgba(44, 51, 68, 0) 100%)"
          />
        </animated.div>

        <HStack {...styles.skillListWrapper}>
          <SkillListBig
            title="Core languages"
            list={[
              "JavaScript",
              "TypeScript",
              "Python",
              "C#",
              "Dart",
              "Solidity",
            ]}
          />
          <SkillList
            title="Backend"
            list={[
              "Node.js",
              "Express.js",
              "Nest.js",
              "Flask",
              "Django",
              "MongoDB",
              "MySQL",
              "Restful API",
              "JWT",
              "Redis",
              "Postgres",
              "Sequelize",
              "Drizzle",
              "TRPC",
              "NGINX",
              "Websockets",
              "GraphQL",
            ]}
          />
          <SkillList
            title="Frontend"
            list={[
              "SSR",
              "SSG",
              "ISR",
              "Tailwind CSS",
              "Next.js",
              "React.js",
              "Redux",
              "SASS/SCSS",
              "Flutter",
              "Jest",
              "Vue.js",
              "Shadcn UI",
            ]}
          />

          <SkillList
            title="CI/CD"
            list={[
              "AWS",
              "AWS S3",
              "AWS EC2",
              "GCP",
              "Docker",
              "Kubernetes",
              "Github Actions",
              "Terraform",
              "Make",
            ]}
          />
          <SkillList
            title="Motion"
            list={["Framer Motion", "Three.js", "React Spring"]}
          />

          <SkillList title="Other" list={["Stable Diffusion", "Open AI"]} />
        </HStack>
      </HStack>
    </VStack>
  );
}

function SkillList({ title, list }: { title: any; list: any[] }) {
  const [lg] = useMediaQuery("(min-width: 1024px)");
  return (
    <VStack position={"relative"} alignItems={"start"}>
      <Box position="relative" pb="4">
        <Text {...styles.skillTitle}>{title}</Text>
        {lg && <Box {...piStyle.underline} />}
      </Box>
      <VStack
        position="relative"
        zIndex={1}
        spacing={0}
        w="full"
        alignItems="start"
      >
        {list.map(item => (
          <Text key={item} {...styles.skillItem}>
            {item}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
function SkillListBig({ title, list }: { title: any; list: any[] }) {
  const [lg] = useMediaQuery("(min-width: 1024px)");
  return (
    <VStack position={"relative"} alignItems={"start"}>
      <Box position="relative" pb="4">
        <Text {...styles.skillTitle}>{title}</Text>
        {lg && <Box {...piStyle.underline} />}
      </Box>
      <VStack
        position="relative"
        zIndex={1}
        spacing={0}
        w="full"
        alignItems="start"
      >
        {list.map(item => (
          <Text
            key={item}
            {...styles.skillItem}
            fontSize="24px"
            color="gray.300"
            fontWeight={400}
          >
            {item}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
