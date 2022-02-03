import { ChangeEvent, memo, useState, VFC } from "react";
import { Box, Flex, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const {login , loding} = useAuth();

  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => setUserId(event.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align={"center"} justify={"center"} height={"100vh"}>
      <Box bg={"white"} w={"sm"} p={"5"} borderRadius={"md"} boxShadow={"md"}>
        {/* デフォルトでHeadingはh２なのでasでh1に変更 */}
        <Heading as="h1" size={"lg"} textAlign={"center"}>
          ユーザー管理画面
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton onClick={onClickLogin} loding={loding} disabled={userId === ''}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
