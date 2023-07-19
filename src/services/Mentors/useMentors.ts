import { useQuery } from "react-query";
import { api } from "../../services";
import { User } from "../../Domains/User";
import { Mentee } from "../../Domains/Mentee";

interface NewMentorProps {
  user: User;
  isAvailable: boolean;
  stack: string[];
  mentees?: Mentee[];
}

interface GetMentorsParams {
  name?: string;
  stack?: Array<string>;
}

const getMentors = (param?: GetMentorsParams) => {
  if (!param) {
    return api.get("/mentor").then((res) => res.data);

  }
  return api.get("/mentor", {params: param}).then((res) => res.data);
};

export const useMentors = (param?: GetMentorsParams) => {
  const getMentorsQuery = async () => {
    if (param) {
      return await getMentors(param);
    }
    return await getMentors();
  };

  return useQuery(["mentors"], getMentorsQuery);
};

export const createNewMentor = (newMentorParams: NewMentorProps) => {
  return api.post("/mentor", newMentorParams).then(() => console.log('Adicionou!!!'));
};





