import LoginForm from 'components/form/LoginForm/LoginForm';
import { CLIENT_APPLICATION_ROUTE } from 'data/routes/client/application';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from 'store';
import classes from './index.module.scss';

const Login = () => {
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.user.token);

  useEffect(() => {
    if(token) {
      navigate(CLIENT_APPLICATION_ROUTE);
    }
  }, [navigate, token])
  

  return (
    <MainLayout>
      <section className={classes['login']}>
        <div className={classes['login__login-wrapper']}>
          <LoginForm />
        </div>
      </section>
    </MainLayout>
  )
}

export default Login;