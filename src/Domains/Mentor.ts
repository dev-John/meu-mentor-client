import { Mentee } from "./Mentee";
import { User } from "./User";

export interface Mentor {
    user: User;
    isAvailable: boolean;
    stack: string[];  
    mentees?: Mentee[];
  }