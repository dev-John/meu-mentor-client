import { Box, Flex, Stack } from "@chakra-ui/react";
import MentorCard from "../MentorCard/MentorCard";

const MentorPanel = () => {
  return (
    <Stack paddingLeft={20} paddingRight={20} spacing={4}>
      <Flex flexWrap="wrap">
        <Box
          // key={data.id}
          flex="0 0 calc(33.33% - 20px)"
          m={2}
        >
          {/* Adjust "calc(33.33% - 20px)" to change the width of each card */}
          <MentorCard />
        </Box>
      </Flex>
    </Stack>
  );

  {
    /* ; */
  }
};

export default MentorPanel;
