import { Dispatch } from '@reduxjs/toolkit';
import SpinnerFullscreen from 'components/spinner/SpinnerFullscreen/SpinnerFullscreen';
import AppHeader from 'components/ui/AppHeader/AppHeader';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from 'store';
import { getMeUser } from 'store/user/actions/get-me-user-action';
import classes from './AppLayout.module.scss';

interface Props {
  children: ReactNode;
}

const AppLayout = ({children}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;
  const navigate = useNavigate();
  
  const {loading, token} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // Fetch user data if token
    if(token) {
      dispatch(getMeUser(token));
    }

    if(!token) {
      navigate('/');
    }
  }, [dispatch, navigate, token])
  
  return (
    <MainLayout>
      {loading && <SpinnerFullscreen />}
      {!loading && <section className={classes['app']}>
        <AppHeader />
        <div className={classes['app__content']}>
          {children}
        </div>
      </section>}
    </MainLayout>
  )
}

export default AppLayout;