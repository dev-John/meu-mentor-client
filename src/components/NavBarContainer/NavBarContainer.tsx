import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      boxSizing="flex"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.300", "primary.300", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
