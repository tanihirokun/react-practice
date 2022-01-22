import { memo, VFC } from "react";

import { HeaderLayout } from "../templates/HeaderLayout";

export const Home: VFC = memo(() => {
  return (
    <HeaderLayout>
      <p>Home画面です</p>
    </HeaderLayout>
  );
});
