import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FcOk } from "react-icons/fc";
import { VscJson } from "react-icons/vsc";
import { Mentor } from "../../Domains/Mentor";

const MentorCard = ({user, stack, isAvailable}: Mentor) => {
  return (
    <>
      <Card maxW="sm" cursor="pointer">
        <CardBody maxH="27vh">
          <Flex justifyContent="space-between">
            <Tooltip label="Mentor Disponível">
              <Box position="relative" display="inline-block">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  height={120}
                  width="100%"
                  borderRadius="full"
                  boxSize={20}
                />
                <Icon
                  as={FcOk}
                  boxSize={7}
                  marginLeft={2}
                  position="absolute"
                  right={1}
                  bottom={1}
                  color={isAvailable ? "white" : "blue"}
                  borderRadius="full"
                />
              </Box>
            </Tooltip>
            <Box mt={4}>
              <Heading size="md">{user?.name}</Heading>
              <Text>{user?.occupation}</Text>
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
            <Text>{stack?.join()}</Text>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default MentorCard;
