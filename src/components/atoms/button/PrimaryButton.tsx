import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loding?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loding = false} = props;
  return (
    <Button bg={"teal.400"} color="white" _hover={{ opacity: 0.8 }} onClick={onClick} isLoading={loding} disabled={disabled || loding}>
      {children}
    </Button>
  );
});
