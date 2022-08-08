import { Response } from "express";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const logoutAllUser = async (req: AuthRequest, res: Response) => {
  try {
    req.user?.clearTokens();
    res.status(200).send();
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Logout all failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default logoutAllUser;