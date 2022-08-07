import { UserModel } from "../../interfaces/user/UserModel";

export const clearTokens = async (user: UserModel) => {
  user.tokens = [];
  await user.save();
}