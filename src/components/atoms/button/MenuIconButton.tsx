import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen} = props;
  return (
    // チャクラUIのアイコンボタンの中で指定する
    // その際にaria-labelを指定しないとエラーになる
    <IconButton
      aria-label="メニューボタン"
      // iconでchakra-ui/iconsからHamburgerIconを指定
      icon={<HamburgerIcon />}
      size={"sm"}
      // variantでハンバーガーメニューの装飾を解除
      variant={"unstyled"}
      // スマホファーストなのでベースがブロックで、ブレイクポイントからノン
      display={{ base: "block", md: "none" }}
      // オンクリックしたらドロアーを開く関数を指定
      // プロプスで持ってきているので間違えないように
      onClick={onOpen}
      
    />
  );
});
