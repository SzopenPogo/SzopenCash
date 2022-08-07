import bcryptjs from 'bcryptjs';
import { ValidateResoult } from '../../interfaces/validate/ValidateResoult';
import { createErrorMessage } from '../message/createErrorMessage';
import { createInfoMessage } from '../message/createInfoMessage';

export const validatePassword = async (
  currentPassword: string, 
  accountPassword: string
): Promise<ValidateResoult> => {
  const isPasswordValid = await bcryptjs.compare(currentPassword, accountPassword);

  if (!isPasswordValid) {
    const errorMessage = createErrorMessage(400, 'Invalid password');
    return {isValid: false, message: errorMessage};
  }

  const infoMessage = createInfoMessage(200, 'Password valid')
  return {isValid: true, message: infoMessage};
}