import { memo, VFC } from "react";


import { HeaderLayout } from "../templates/HeaderLayout";

export const Login: VFC = memo(() => {
  return (
    <HeaderLayout>
      <p>ログインページ</p>
    </HeaderLayout>
  )

})