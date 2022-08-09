import ToggleVisibilityButton from "components/button/ToggleVisibilityButton/ToggleVisibilityButton";
import InputWrapper from "components/input/InputWrapper/InputWrapper";
import useAssignRefs from "hooks/useAssignRefs";
import { ChangeEvent, forwardRef, useEffect, useId, useRef, useState } from "react";


interface Props {
  title: string;
  isValid?: boolean;
  value?: string;
  isReadonly?: boolean;
  isRequired?: boolean;
  minLength?: number;
  onChange?: (value: string) => void;
  invalidPasswordMessages?: Array<string>;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(({
  title,
  isValid = true,
  value = '',
  isReadonly,
  isRequired = false,
  minLength,
  onChange,
  invalidPasswordMessages
}, ref) => {
  const passwordLocalRef = useRef<HTMLInputElement>(null);
  const passwordRef = useAssignRefs(passwordLocalRef, ref);

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>(value);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(isValid);

  useEffect(() => {

    // Remove password input border if password value length is 0
    if(passwordValue.length <= 0) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(isValid);
    }
  }, [passwordValue, isValid])

  const focusPassword = () => {
    passwordLocalRef.current?.focus();
    setFocus();
  }

  const setFocus = () => {
    setIsFocus(true);
  }

  const setBlur = () => {
    setIsFocus(false);
  }

  const passwordValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPasswordValue(newValue);

    if(onChange) {
      onChange(newValue);
    }
  }

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  }

  const passwordId = useId();
  const inputType = isVisible ? 'text' : 'password';
  
  return (
    <InputWrapper
      focusInput={focusPassword}
      isInputFocus={isFocus}
      title={title}
      inputId={passwordId}
      isValid={isPasswordValid}
      inputInfo={invalidPasswordMessages}
    >
      <input
        ref={passwordRef}
        id={passwordId}
        autoCapitalize='none'
        autoCorrect='off'
        spellCheck='false'
        onBlur={setBlur}
        maxLength={100}
        minLength={minLength}
        type={inputType}
        title='Password'
        readOnly={isReadonly}
        value={passwordValue}
        onChange={passwordValueHandler}
        required={isRequired}
      />
      <ToggleVisibilityButton
        onClick={togglePasswordVisibility}
        isActive={isVisible}
      />
    </InputWrapper>
  )
})

export default PasswordInput;