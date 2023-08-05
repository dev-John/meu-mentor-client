import { Button } from "@chakra-ui/react";
import MentorFilter from "../../components/MentorFilter/MentorFilter";
import MentorPanel from "../../components/MentorPanel/MentorPanel";
import { createNewMentor } from "../../services/Mentors/useMentors";

const MentorBoard = () => {
  const newMentor = {
    "user": {
        "name": "Gabriel Barros",
        "email": "gabriel_barros@mail.com"
    },
    "isAvailable": true,
    "stack": [
        "C#", ".NET", "MongoDB", "SQL"
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
