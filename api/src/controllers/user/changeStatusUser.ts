import { Response } from "express";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import User from "../../models/userModel";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const changeStatusUser = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      const errorMessage = createErrorMessage(404, 'User not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    await user.toggleActive();

    res.status(200).send(user);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Change user status failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
} 

export default changeStatusUser;