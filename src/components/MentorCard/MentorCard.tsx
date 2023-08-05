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
import { Mentor } from "../../Domains/Mentor";

interface MentorCarpProps {
  mentor: Mentor
}

const MentorCard = ({mentor}: MentorCarpProps) => {
  return (
    <>
      <Card maxW="sm" cursor="pointer">
        <CardBody maxH="27vh">
          <Flex justifyContent="space-between" pr={[0, 7]}>
            <Tooltip label={mentor.isAvailable ? "Mentor Disponível" : "Mentor Indisponível"}>
              <Box position="relative" display="inline-block">
                <Avatar name={mentor.user.name} src="https://bit.ly/dan-abramov">
                  <AvatarBadge
                    borderColor="papayawhip"
                    bg={mentor.isAvailable ? "green.500" : "gray.300"}
                    boxSize="1em"
                  />
                </Avatar>
              </Box>
            </Tooltip>
            <Box mt={[2, 0]} ml={[0, 6]}>
              <Heading size="md">{mentor.user.name}</Heading>
              <Text>{mentor.user.occupation}</Text>
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
            <Text>{mentor.stack.toString()}</Text>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default MentorCard;
