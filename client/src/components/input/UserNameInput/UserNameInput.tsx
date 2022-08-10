import TextInput from "components/input/TextInput/TextInput";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { validateUserNameValue } from "utils/validation/validateUserNameValue";

interface Props {
  title: string;
  value?: string; 
  checkIsValid?: (isValid: boolean) => void;
}

const UserNameInput = forwardRef<HTMLInputElement, Props>(({
  title,
  value,
  checkIsValid
}, ref) => {
  const USER_NAME_MIN_LENGHT = useSelector((state: RootState) => state.apiData.apiData.USER_NAME_MIN_LENGHT);
  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(false);

  const validateUserName = useCallback((userName: string) => {
    const isUserNameValueValid = validateUserNameValue(userName, USER_NAME_MIN_LENGHT);
    setIsUserNameValid(isUserNameValueValid);

    if(checkIsValid) {
      checkIsValid(isUserNameValueValid);
    }
  }, [USER_NAME_MIN_LENGHT, checkIsValid])

  useEffect(() => {
    if(value) {
      validateUserName(value)
    }
  }, [validateUserName, value])
  
  return (
    <TextInput
      ref={ref}
      title={title}
      onChange={validateUserName}
      isValid={isUserNameValid}
      value={value}
    />
  )
})

export default UserNameInput;