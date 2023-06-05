import { useQuery } from "react-query";
import { api } from "../../services";

const getMentors = () => {
  return api.get("/mentor").then((res) => res.data);
};

export const useMentors = () => {
  return useQuery(["mentors"], getMentors);
};
