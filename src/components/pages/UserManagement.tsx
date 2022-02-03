/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useCallback, useEffect, VFC } from "react";
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure,
  
} from "@chakra-ui/react";

import { HeaderLayout } from "../templates/HeaderLayout";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetalModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";



export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser} = useSelectUser()

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen})
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      <HeaderLayout>
        {loading ? (
          <Center h={"100vh"}>
            <Spinner />
          </Center>
        ) : (
          <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <WrapItem key={user.id} mx={"auto"}>
                <UserCard
                  id={user.id}
                  imageUrl="http://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
        )}
        <UserDetalModal user={selectedUser} isOpen={isOpen} onClose={onClose}/>
      </HeaderLayout>
    </>
  );
});
