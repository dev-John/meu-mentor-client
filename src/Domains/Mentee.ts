import { Mentor } from "./Mentor";
import { User } from "./User";

export interface Mentee {
    user: User;
    isLookingForAMentor: boolean;
    stack: string[];  
    mentors?: Mentor[];
  }