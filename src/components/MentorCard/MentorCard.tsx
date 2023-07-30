import {
  Avatar,
  AvatarBadge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { VscJson } from "react-icons/vsc";

const MentorCard = () => {
  return (
    <>
      <Card maxW="sm" cursor="pointer">
        <CardBody maxH="27vh">
          <Flex justifyContent="space-between" pr={[0, 7]}>
            <Tooltip label="Mentor Disponível">
              <Box position="relative" display="inline-block">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
                  <AvatarBadge
                    borderColor="papayawhip"
                    bg="green.500"
                    boxSize="1em"
                  />
                </Avatar>
              </Box>
            </Tooltip>
            <Box mt={[2, 0]} ml={[0, 6]}>
              <Heading size="md">John Doe</Heading>
              <Text>Analista de Desenvolvimento Sr</Text>
            </Box>
          </Flex>
        </CardBody>
        <Divider />
        <CardFooter
          bg="primary.300"
          color="white"
          borderBottomLeftRadius="lg"
          borderBottomRightRadius="lg"
        >
          <Flex align="center">
            <Icon
              as={VscJson}
              boxSize={6}
              marginRight={2}
              strokeWidth={1}
              strokeLinecap="round"
            />

            <Text>React, Node, Angular</Text>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default MentorCard;
