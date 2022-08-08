import { Response } from "express";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const getUser = async (req: AuthRequest, res: Response) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get user data failed', error);
    res.status(errorMessage.status).send(error);
  }
}

export default getUser;