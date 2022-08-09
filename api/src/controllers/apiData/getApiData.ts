import { Request, Response } from "express";
import { PASSWORD_MIN_LENGTH, PASSWORD_REG_EXP } from "../../constants/user/password";
import { USER_NAME_MIN_LENGHT } from "../../constants/user/userData";
import { createErrorMessage } from "../../utils/message/createErrorMessage";

const getApiData = (req: Request, res: Response) => {
  try {
    const apiData = {
      PASSWORD_MIN_LENGTH,
      PASSWORD_REG_EXP,
      USER_NAME_MIN_LENGHT
    }

    res.status(200).send(apiData);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get api data failed', error);
    res.status(errorMessage.status).send(error);
  }
}

export default getApiData;