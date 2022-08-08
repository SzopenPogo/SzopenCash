import { Request, Response } from "express";
import { UserAccessData } from "../../interfaces/user/UserAccessData";
import User from "../../models/userModel";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body as UserAccessData;
    const user = await User.findByCredentials(userName, password);

    if (!user.isActive) {
      const errorMessage = createErrorMessage(500, 'User banned');
      return res.status(errorMessage.status).send(errorMessage);
    }

    const token = await user.generateAuthToken();

    res.status(200).send({ user, token });
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Login failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default loginUser;