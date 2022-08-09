import { Dispatch } from '@reduxjs/toolkit';
import MainForm from 'components/form/MainForm/MainForm';
import PasswordInput from 'components/input/PasswordInput/PasswordInput';
import TextInput from 'components/input/TextInput/TextInput';
import ErrorSpan from 'components/span/ErrorSpan/ErrorSpan';
import Spinner from 'components/spinner/Spinner/Spinner';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { loginUser } from 'store/user/actions/login-user-action';
import { validatePasswordValue } from 'utils/validation/validatePasswordValue';
import {validateUserNameValue} from 'utils/validation/validateUserNameValue';

const LoginForm = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {
    USER_NAME_MIN_LENGHT,
    PASSWORD_MIN_LENGTH,
    PASSWORD_REG_EXP
  } = useSelector((state: RootState) => state.apiData.apiData);
  const {loading, error, token} = useSelector((state: RootState) => state.user);

  const [isSubmitActive, setIsSubmitActive] = useState<boolean>(false);
  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [invalidPasswordMessages, setInvalidPasswordMessages] = useState<Array<string>>([]);
  
  useEffect(() => {
    setIsSubmitActive(isUserNameValid && isPasswordValid);
  }, [isUserNameValid, isPasswordValid])
  

  const loginUserHandler = (event: FormEvent) => {
    event.preventDefault();

    const loginValue = loginRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    if(loginValue && passwordValue) {
      dispatch(loginUser(loginValue, passwordValue));
    }
  }

  const validatePassword = (password: string) => {
    const invalidPasswordMessages = validatePasswordValue(
      password,
      PASSWORD_MIN_LENGTH,
      PASSWORD_REG_EXP
    )
    setInvalidPasswordMessages(invalidPasswordMessages);

    // If validation does not return any message then password is valid
    setIsPasswordValid(invalidPasswordMessages.length <= 0);
  }

  const validateUserName = (userName: string) => {
    const isUserNameValueValid = validateUserNameValue(userName, USER_NAME_MIN_LENGHT);
    setIsUserNameValid(isUserNameValueValid);
  }
  
  return (
    <MainForm 
      onSubmit={loginUserHandler}
      title='Logowanie'
      buttonTitle='Zaloguj się'
      isActive={isSubmitActive}
    >
      {loading && <Spinner size={'10rem'} borderSize={'.7rem'} color={'white'} />}
      {!loading && !token && <>
        <TextInput
        ref={loginRef}
        title={'Nazwa Użytkownika'}
        onChange={validateUserName}
        isValid={isUserNameValid}
        />
        <PasswordInput
          ref={passwordRef}
          title={'Hasło'}
          onChange={validatePassword}
          isValid={isPasswordValid}
          invalidPasswordMessages={invalidPasswordMessages}
        />
        {error && <ErrorSpan value={'Logowanie nie powiodło się'} />}
      </>}
    </MainForm>
  )
}

export default LoginForm;