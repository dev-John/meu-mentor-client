import { useMentors, createNewMentor } from "../../services/Mentors/useMentors";

const MentorBoard = () => {
  const { data } = useMentors({name: "Elias Dunha"});
  const newMentor = {
    "user": {
        "name": "Ana Claudia Pedroso",
        "email": "anacp@mail.com"
    },
    "isAvailable": true,
    "stack": [
        "ReactJS, NodeJS"
    ]
  }
  return (
    <>
      Mentor Board! Existem {data?.length || 0} Mentores cadastrados no momento
    <br/>
    <button type="submit" onClick={() => createNewMentor(newMentor)}>Adding new mentor</button>
    </>
  );
};

export default MentorBoard;
