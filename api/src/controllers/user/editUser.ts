import { Response } from "express";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const editUser = async (req: AuthRequest, res: Response) => {
  try {
    const allowedUpdates = ['userName', 'password'];

    const updatedUser = await req.user?.editUserData(
      req.body, 
      allowedUpdates, 
      req.body.currentPassword
    );
    
    const outputData = updatedUser!.status === 200 ? req.user : updatedUser?.message;
    res.status(updatedUser!.status).send(outputData);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Edit user data failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default editUser;