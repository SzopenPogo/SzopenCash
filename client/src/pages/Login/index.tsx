import MainForm from 'components/form/MainForm/MainForm';
import PasswordInput from 'components/input/PasswordInput/PasswordInput';
import TextInput from 'components/input/TextInput/TextInput';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { FormEvent, useRef, useState } from 'react';
import classes from './index.module.scss';

const Login = () => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isSubmitActive, setIsSubmitActive] = useState<boolean>(false);
  //TODO Input validation
  const loginUserHandler = (event: FormEvent) => {
    event.preventDefault();

    const loginValue = loginRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    console.log(loginValue, passwordValue);
    
  }
  return (
    <MainLayout>
      <section className={classes['login']}>
        <MainForm 
          onSubmit={loginUserHandler}
          title='Logowanie'
          buttonTitle='Zaloguj się'
          isActive={isSubmitActive}
        >
          <TextInput
            ref={loginRef}
            title={'Nazwa Użytkownika'}
          />
          <PasswordInput
            ref={passwordRef}
            title={'Hasło'} 
          />
        </MainForm>
      </section>
    </MainLayout>
  )
}

export default Login;