import { memo, VFC } from "react";

import { HeaderLayout } from "../templates/HeaderLayout";

export const Setting: VFC = memo(() => {
  return (
    <HeaderLayout>
      <p>セッティング画面です</p>
    </HeaderLayout>
  )

})