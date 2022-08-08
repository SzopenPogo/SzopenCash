import { Response } from "express";
import { MatchObject } from "../../interfaces/app/MatchObject";
import { AuthRequest } from "../../interfaces/user/AuthRequest";
import User from "../../models/userModel";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    const match: MatchObject = {};

    if (req.query.isAdmin) {
      match.isAdmin = req.query.isAdmin;
    }

    if (req.query.isActive) {
      match.isActive = req.query.isActive;
    }

    const users = await User.find(match);

    res.status(200).send(users);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get users failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default getAllUsers;