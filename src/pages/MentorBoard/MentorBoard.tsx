import { Button } from "@chakra-ui/react";
import MentorFilter from "../../components/MentorFilter/MentorFilter";
import MentorPanel from "../../components/MentorPanel/MentorPanel";
import { createNewMentor } from "../../services/Mentors/useMentors";

const MentorBoard = () => {
  const newMentor = {
    "user": {
        "name": "Michael Kyle",
        "email": "mc_kyle@mail.com",
        "occupation": "Gerente de Desenvolvimento"
    },
    "isAvailable": false,
    "stack": [
        "Comunicação", "JS", "NodeJS"
    ]
  }

  return (
    <>
      <MentorFilter />
      <MentorPanel />
      <br/>
      <Button type="submit" onClick={() => createNewMentor(newMentor)}>Adding new mentor</Button>
    </>
  );
};

export default MentorBoard;
