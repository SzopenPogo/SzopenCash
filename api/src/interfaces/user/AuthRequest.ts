import { Request } from "express";
import { UserModel } from "./UserModel";

export interface AuthRequest extends Request {
  user?: UserModel;
  token?: string;
}