import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { AuthRequest } from "../interfaces/user/AuthRequest";
import { TOKEN_SECRET } from "../constants/token/token";
import { TokenDecoded } from "../interfaces/token/TokenDecoded";
import User from "../models/userModel";
import { createErrorMessage } from "../utils/message/createErrorMessage";

const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const header = req.header('Authorization');
    
    const token = header!.split(' ')[1];
    const decoded = jwt.verify(token, TOKEN_SECRET) as TokenDecoded;
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      const errorMessage = createErrorMessage(404, 'User not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    if (!user.isActive) {
      const errorMessage = createErrorMessage(500, 'User banned')
      await user.clearTokens();

      return res.status(errorMessage.status).send(errorMessage);
    }

    req.user = user;
    req.token = token;
    
    next();
  } catch (error) {
    const errorMessage = createErrorMessage(401, 'Unauthorized', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default auth