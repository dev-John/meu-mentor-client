import { useMentors } from "../../services/Mentors/useMentors";

const MentorBoard = () => {
  const { data } = useMentors();

  return (
    <>
      Mentor Board! Existem {data?.length || 0} Mentores cadastrados no momento
    </>
  );
};

export default MentorBoard;
