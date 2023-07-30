import { Box, Flex, Stack } from "@chakra-ui/react";
import MentorCard from "../MentorCard/MentorCard";

const MentorPanel = () => {
  return (
    <Stack
      paddingLeft={[10, 20]}
      paddingRight={[10, 18]}
      spacing={4}
      marginTop={4}
      overflow="auto"
      maxHeight="80vh"
    >
      <Flex
        flexWrap="wrap"
        justifyContent={["center", "flex-start", "flex-start", "flex-start"]}
      >
        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>

        <Box
          p={4}
          width="auto"
          flexBasis={[
            "100%", // Mobile: 1 card per line
            "calc(50% - 20px)", // 2 cards in a line
            "calc(33.33% - 20px)", // 3 cards in a line
            "calc(25% - 20px)", // 4 cards in a line
          ]}
        >
          <MentorCard />
        </Box>
      </Flex>
    </Stack>
  );
};

export default MentorPanel;
