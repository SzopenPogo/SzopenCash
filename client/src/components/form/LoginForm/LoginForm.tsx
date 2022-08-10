import { Dispatch } from '@reduxjs/toolkit';
import MainForm from 'components/form/MainForm/MainForm';
import PasswordValidatedInput from 'components/input/PasswordValidatedInput/PasswordValidatedInput';
import UserNameInput from 'components/input/UserNameInput/UserNameInput';
import ErrorSpan from 'components/span/ErrorSpan/ErrorSpan';
import Spinner from 'components/spinner/Spinner/Spinner';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { loginUser } from 'store/user/actions/login-user-action';

const LoginForm = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {loading, error, token} = useSelector((state: RootState) => state.user);

  const [isSubmitActive, setIsSubmitActive] = useState<boolean>(true);
  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  
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

  const checkUserNameValid = (isValid: boolean) => {
    setIsUserNameValid(isValid);
  }

  const checkPasswordValid = (isValid: boolean) => {
    setIsPasswordValid(isValid);
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
        <UserNameInput
          ref={loginRef}
          title='Nazwa Użytkownika'
          checkIsValid={checkUserNameValid}
        />
        <PasswordValidatedInput
          ref={passwordRef}
          title='Hasło'
          checkIsValid={checkPasswordValid}
        />
        {error && <ErrorSpan value={'Logowanie nie powiodło się'} />}
      </>}
    </MainForm>
  )
}

export default LoginForm;