import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { VscCheck, VscJson } from "react-icons/vsc";

const MentorCard = () => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">John Doe</Heading>
            <Text>Analista de desenvolvimento Sr</Text>
            <Flex align="center">
              <Icon
                as={VscCheck}
                boxSize={6}
                color="green.500"
                marginRight={2}
                style={{ strokeWidth: "2px", strokeLinecap: "round" }}
              />
              <Text color="blue.600" fontSize="2xl">
                Disponível
              </Text>
            </Flex>
          </Stack>
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
              style={{ strokeWidth: "1px", strokeLinecap: "round" }}
            />

            <Text>React, Node, Angular</Text>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default MentorCard;
