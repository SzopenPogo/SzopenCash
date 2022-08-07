import { ValidateResoult } from "../../interfaces/validate/ValidateResoult";
import { createErrorMessage } from "../message/createErrorMessage";
import { createInfoMessage } from "../message/createInfoMessage";

export const validateUpdateOperator = (
  allowedUpdates: Array<string>,
  updates: Array<string>
): ValidateResoult => {
  
  const isValidOperator = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperator) {
    const errorMessage = createErrorMessage(413, 'Invalid operator');
    return {isValid: false, message: errorMessage};
  }

  const infoMessage = createInfoMessage(200, 'Update valid');
  return {isValid: true, message: infoMessage};
}