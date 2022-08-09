import { Dispatch } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { logoutUser } from 'store/user/actions/logout-user-action';
import classes from './LogoutButton.module.scss';
import logoutIcon from 'assets/images/icon/white/turnOffIcon.svg'

const LogoutButton = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const token = useSelector((state: RootState) => state.user.token);
  const isMobile = useSelector((state: RootState) => state.client.isMobile);

  const logoutHandler = () => {
    dispatch(logoutUser(token));
  }

  return (
    <button
      className={classes['logout']}
      type='button'
      title='Wyloguj'
      onClick={logoutHandler}
    >
      <img 
        className={classes['logout__image']}
        src={logoutIcon} 
        alt='logout-img'
      />
      {!isMobile && <span className={classes['logout__text']}>Wyloguj</span>}
    </button>
  )
}

export default LogoutButton;