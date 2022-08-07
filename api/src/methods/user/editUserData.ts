import { UserModel } from "../../interfaces/user/UserModel";
import { createInfoMessage } from "../../utils/message/createInfoMessage";
import { validatePassword } from "../../utils/validation/validatePassword";
import { validateUpdateOperator } from "../../utils/validation/validateUpdateOperator";

export const editUserData = async (
  user: UserModel,
  requestBody: any,
  allowedUpdates: Array<string>,
  currentPassword?: string
) => {
  let updates = Object.keys(requestBody);
  
  if (currentPassword) {
    const isPasswordValid = await validatePassword(currentPassword, user.password);
    if (!isPasswordValid.isValid) {
      const {message: errorMessage} = isPasswordValid.message;
      return errorMessage;
    }


    //  Delete currentPassword from updates array
    const currentPasswordVariableName = Object.keys({currentPassword})[0]
    updates = updates.filter(update => update !== currentPasswordVariableName);
  }

  const isValidOperator = validateUpdateOperator(allowedUpdates, updates)
  if (!isValidOperator.isValid) {
    const {message: errorMessage} = isValidOperator.message;
    return errorMessage;
  }

  //  Update user
  updates.forEach(update => {
    user[update] = requestBody[update];
  });

  await user.save();
  
  const infoMessage = createInfoMessage(200, 'Data updated');
  return infoMessage;
}