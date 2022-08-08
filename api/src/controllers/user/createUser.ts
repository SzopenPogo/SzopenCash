import { Response } from "express";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import { UserAccessData } from "../../interfaces/user/UserAccessData";
import User from "../../models/userModel";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const createUser = async (req: AuthRequest, res: Response) => {
  try {
    const userData = req.body as UserAccessData;
    
    const user = new User(userData);
    await user.save();

    const token = await user.generateAuthToken();

    res.status(201).send({user, token})
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Create user failed!', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default createUser;