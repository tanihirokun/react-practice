import { memo, VFC } from "react";


import { HeaderLayout } from "../templates/HeaderLayout";

export const UserManagement: VFC = memo(() => {
  return (
    <HeaderLayout>
      <p>ユーザー管理画面です</p>
    </HeaderLayout>
  )

})