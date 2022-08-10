import PasswordInput from 'components/input/PasswordInput/PasswordInput';
import { forwardRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { validatePasswordValue } from 'utils/validation/validatePasswordValue';

interface Props {
  title: string;
  checkIsValid?: (isValid: boolean) => void;
}

const PasswordValidatedInput = forwardRef<HTMLInputElement, Props>(({
  title,
  checkIsValid
}, ref) => {

  const {
    PASSWORD_MIN_LENGTH,
    PASSWORD_REG_EXP
  } = useSelector((state: RootState) => state.apiData.apiData);

  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [invalidPasswordMessages, setInvalidPasswordMessages] = useState<Array<string>>([]);

  const validatePassword = (password: string) => {
    const invalidPasswordMessages = validatePasswordValue(
      password,
      PASSWORD_MIN_LENGTH,
      PASSWORD_REG_EXP
    )
    setInvalidPasswordMessages(invalidPasswordMessages);

    const isValid = invalidPasswordMessages.length <= 0

    // If validation does not return any message then password is valid
    setIsPasswordValid(isValid);

    if(checkIsValid) {
      checkIsValid(isValid);
    }
  }
  
  return (
    <PasswordInput
      ref={ref}
      title={title}
      onChange={validatePassword}
      isValid={isPasswordValid}
      invalidPasswordMessages={invalidPasswordMessages}
    />
  )
})

export default PasswordValidatedInput;