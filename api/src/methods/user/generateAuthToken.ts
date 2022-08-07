import { UserModel } from "../../interfaces/user/UserModel";
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../../constants/token/token";

export const generateAuthToken = async (user: UserModel) => {
  const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);
  
  user.tokens = user.tokens.concat({ token });
  
  await user.save();
  return token;
}