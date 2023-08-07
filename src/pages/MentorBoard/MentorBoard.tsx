import { Button } from "@chakra-ui/react";
import MentorFilter from "../../components/MentorFilter/MentorFilter";
import MentorPanel from "../../components/MentorPanel/MentorPanel";
import { createNewMentor } from "../../services/Mentors/useMentors";
import { generateRandomMentor } from "../../utils/mock/generateRandomUsers";

const MentorBoard = () => {
  return (
    <>
      <MentorFilter />
      <MentorPanel />
      <br />
      <Button
        type="submit"
        onClick={() => createNewMentor(generateRandomMentor())} // TODO Update the creation to real mentors
      >
        Adding new mentor
      </Button>
    </>
  );
};

export default MentorBoard;
