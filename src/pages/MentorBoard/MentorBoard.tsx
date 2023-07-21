import MentorFilter from "../../components/MentorFilter/MentorFilter";
import MentorPanel from "../../components/MentorPanel/MentorPanel";

const MentorBoard = () => {
  // const { data } = useMentors();

  return (
    <>
      <MentorFilter />
      <MentorPanel />
      {/* Mentor Board! Existem {data?.length || 0} Mentores cadastrados no momento */}
    </>
  );
};

export default MentorBoard;
