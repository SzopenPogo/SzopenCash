import { Dispatch } from '@reduxjs/toolkit';
import MainButton from 'components/button/MainButton/MainButton';
import UserManageContainer from 'components/modal/UserModal/components/UserManageContainer/UserManageContainer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { logoutAllUser } from 'store/user/actions/logout-all-user-action';

const UserManageLogoutAll = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const token = useSelector((state: RootState) => state.user.token);

  const logoutAllHandler = () => {
    dispatch(logoutAllUser(token));
  }
  return (
    <UserManageContainer 
      title={'Wyloguj się'} 
      text={'Wyloguj się ze wszystkich urządzeń'}
    >
      <MainButton 
        title={'Wyloguj się'}
        onClick={logoutAllHandler}
      />
    </UserManageContainer>
  )
}

export default UserManageLogoutAll;