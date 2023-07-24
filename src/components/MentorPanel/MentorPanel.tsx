import { Box, Flex, Stack } from "@chakra-ui/react";
import MentorCard from "../MentorCard/MentorCard";

const MentorPanel = () => {
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
        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>

        <Box p={4} width="calc(25% - 10px)">
          <MentorCard />
        </Box>
      </Flex>
    </Stack>
  );
};

export default MentorPanel;
