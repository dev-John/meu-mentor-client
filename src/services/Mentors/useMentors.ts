import { useQuery } from "react-query";
import { api } from "../../services";
import { Mentor } from "../../Domains/Mentor";

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

export const createNewMentor = (newMentorParams: Mentor) => {
  return api.post("/mentor", newMentorParams).then(() => console.log('Adicionou!!!'));
};
