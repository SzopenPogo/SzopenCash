import { UserModel } from "../../interfaces/user/UserModel";

export const toggleActive = async (user: UserModel) => {
  user.isActive = !user.isActive;
  await user.save();
}