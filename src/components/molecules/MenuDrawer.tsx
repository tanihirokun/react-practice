import { memo, VFC } from "react"
import { Drawer, DrawerOverlay, DrawerBody, Button } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {onClose, isOpen} = props;
  return (
    // ドロアーを使いときはDrawerで全体を囲い
    // DrawerOverlayで影のついたものを指定
    <Drawer placement="left" size={'xs'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          {/* DrawerBodyに作りたいメニューボタンをかく */}
          <DrawerBody p={0} bg={'gray.100'} h={'100vh'}>
            <Button w={'100%'}>TOP</Button>
            <Button w={'100%'}>ユーザー一覧</Button>
            <Button w={'100%'}>設定</Button>
          </DrawerBody>
        </DrawerOverlay>
      </Drawer>
  )
})