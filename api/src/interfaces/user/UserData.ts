import { Token } from "../token/Token";

export interface UserData {
  userName: string;
  password: string;
  tokens: Array<Token>;
  isAdmin: boolean;
  isActive: boolean;
}