import { Box, Button, Stack } from "@chakra-ui/react";
import MenuItem from "../MenuItem/MenuItem";

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Mentorias</MenuItem>
        <MenuItem to="/how">Sobre </MenuItem>
        <MenuItem to="/pricing">Login </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color="white"
            bg="primary.200"
            _hover={{
              bg: "primary.300",
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
