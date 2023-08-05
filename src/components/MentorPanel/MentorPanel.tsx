import { Box, Flex, Stack } from "@chakra-ui/react";
import MentorCard from "../MentorCard/MentorCard";
import { useMentors } from "../../services/Mentors/useMentors";
import { Mentor } from "../../Domains/Mentor";

const MentorPanel = () => {
  const { data: mentorsList } = useMentors();

  return (
    <Stack
      paddingLeft={20}
      paddingRight={20}
      spacing={4}
      marginTop={4}
      overflow="auto"
      maxHeight="80vh"
    >
      <Flex flexWrap="wrap" gap={2}>
        {mentorsList?.map((mentor: Mentor) => (

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard mentor={mentor}/>
        </Box>
        ))}
      </Flex>
    </Stack>
  );
};

export default MentorPanel;
