import { memo, VFC } from "react";
import { Drawer, DrawerOverlay, DrawerBody, Button } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props;
  return (
    // ドロアーを使いときはDrawerで全体を囲い
    // DrawerOverlayで影のついたものを指定
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        {/* DrawerBodyに作りたいメニューボタンをかく */}
        <DrawerBody as='nav' p={0} bg={"gray.100"} h={"100vh"} w={'80%'}>
          <Button w={"100%"} onClick={onClickHome}>TOP</Button>
          <Button w={"100%"} onClick={onClickUserManagement}>ユーザー一覧</Button>
          <Button w={"100%"} onClick={onClickSetting}>設定</Button>
        </DrawerBody>
      </DrawerOverlay>
    </Drawer>
  );
});
