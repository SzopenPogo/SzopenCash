import { Response } from "express";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import User from "../../models/userModel";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const getUserById = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      const errorMessage = createErrorMessage(404, 'User not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    res.status(200).send(user);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get user by id failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default getUserById;