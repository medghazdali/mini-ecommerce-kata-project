import { User } from './User';

export type AuthContextType = {
  user: User | null;
  attemptLogin: (newUser: User) => void;
  logout: () => void;
};
