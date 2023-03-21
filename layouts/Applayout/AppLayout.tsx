import { HStack, VStack } from "@chakra-ui/react";
import { BottomBar } from "./BottomBar/Bottombar";
import { Sidebar } from "./SidebarLayout/Sidebar/Sidebar";
import { LeftSidebar } from "./SidebarLayout/SidebarLayout";
import { styles } from "./styles";
import { TopBar } from "./Topbar/TopBar";

export default function AppLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <VStack bg="white" w="full" alignItems={"stretch"}>
      <TopBar title={title} />

      <HStack {...styles.contentWrapper}>
        <LeftSidebar>
          <Sidebar />
        </LeftSidebar>
        <VStack
          w="full"
          py={{
            base: "80px",
            lg: "120px",
          }}
        >
          {children}
        </VStack>
      </HStack>
      <BottomBar />
    </VStack>
  );
}
