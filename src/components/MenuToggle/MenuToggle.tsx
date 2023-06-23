import { Box } from "@chakra-ui/react";
import { VscClose, VscMenu } from "react-icons/vsc";

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <VscClose /> : <VscMenu />}
    </Box>
  );
};

export default MenuToggle;
