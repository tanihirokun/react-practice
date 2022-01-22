import { extendTheme } from "@chakra-ui/react";


// このページはチャクラユーアイの雛形みたいなものなので覚える
const theme = extendTheme({
  styles: {
    global: {
      body: {
        // ボディーで全体の設定ができる
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
});

export default theme;
