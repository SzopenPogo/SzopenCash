import { Response } from "express";
import { Token } from "../../interfaces/token/Token";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const logoutUser = async (req: AuthRequest, res: Response) => {
  try {
    //Remove token from account tokens array (if contains token passed by request in auth middleware)
    req.user!.tokens = req.user!.tokens.filter((token: Token) => {
      return token.token !== req.token;
    });

    await req.user!.save();
    res.status(200).send();
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Logout failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default logoutUser;