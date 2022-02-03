import { memo, useCallback, VFC } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: VFC = memo(() => {
  // useDisclosure() はchakra ui からハンバーガーメニューを開くための関数を持ってくる
  const { isOpen, onOpen, onClose } = useDisclosure();
  // isOpenはboolean   onOpen, onCloseは関数

  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home"), [navigate]);

  const onClickUserManagement = useCallback(
    () => navigate("/home/user_management"),
    [navigate]
  );

  const onClickSetting = useCallback(
    () => navigate("/home/setting"),
    [navigate]
  );

  return (
    <>
      {/* Flexでflex boxのように使える*/}
      <Flex
        // asでタグの意味付けをできる
        as="nav"
        bg={"teal.500"}
        color={"gray.50"}
        align={"center"}
        justify={"space-between"}
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align={"center"}
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align={"center"}
          fontSize={"sm"}
          display={{ base: "none", md: "flex" }}
          flexGrow={2}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement} >ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting} >設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
