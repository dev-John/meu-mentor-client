import MentorFilter from "../../components/MentorFilter/MentorFilter";
import MentorPanel from "../../components/MentorPanel/MentorPanel";
import { useMentors, createNewMentor } from "../../services/Mentors/useMentors";

const MentorBoard = () => {
  const { data } = useMentors();
  const newMentor = {
    "user": {
        "name": "Jonatas Oliveira da Silva",
        "email": "jolivsilva@mail.com",
        "occupation": "Analista de Sistemas"
    },
    "isAvailable": true,
    "stack": [
        "ReactJS, NodeJS, NextJS, MongoDB, C#"
    ]
  }
  return (
    <>
     <MentorFilter />
    <MentorPanel mentorsList={data} />
    <br/>
    <button type="submit" onClick={() => createNewMentor(newMentor)} style={{backgroundColor: "purple", color: "white"}}>Adding new mentor</button>
    </>
  );
};

export default MentorBoard;
