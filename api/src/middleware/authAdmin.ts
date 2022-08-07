import { AuthRequest } from "../interfaces/user/AuthRequest";
import { NextFunction, Response } from "express";
import { createErrorMessage } from "../utils/message/createErrorMessage";

const authAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    if (!user) {
      const errorMessage = createErrorMessage(404, 'User not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    if (!user.isAdmin) {
      const errorMessage = createErrorMessage(401, 'User is not an admin')
      return res.status(errorMessage.status).send(errorMessage);
    }
    
    next();
  } catch (error) {
    const errorMessage = createErrorMessage(401, 'Admin unauthorized', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default authAdmin