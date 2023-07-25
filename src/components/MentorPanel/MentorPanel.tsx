import { Box, Flex, Stack } from "@chakra-ui/react";
import MentorCard from "../MentorCard/MentorCard";
import { Mentor } from "../../Domains/Mentor";

interface MentorsListProps {
  mentorsList: Mentor[];
}

const MentorPanel = ({mentorsList}: MentorsListProps) => {
    return (mentorsList?.map((mentor: Mentor) => (
      <Stack
        paddingLeft={20}
        paddingRight={20}
        spacing={4}
        marginTop={4}
        overflow="auto"
        maxHeight="80vh"
        key={`${mentor.user.name}${mentor.user.email}`}
      >
        <Flex flexWrap="wrap" gap={2}>
          <Box p={4} width="calc(25% - 10px)">
            <MentorCard user={mentor.user} stack={mentor.stack} isAvailable={mentor.isAvailable} />
          </Box>
        </Flex>
      </Stack>
   ))
)};

export default MentorPanel;
