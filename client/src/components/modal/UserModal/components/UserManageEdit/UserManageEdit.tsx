import { Dispatch } from '@reduxjs/toolkit';
import MainForm from 'components/form/MainForm/MainForm';
import PasswordInput from 'components/input/PasswordInput/PasswordInput';
import PasswordValidatedInput from 'components/input/PasswordValidatedInput/PasswordValidatedInput';
import UserNameInput from 'components/input/UserNameInput/UserNameInput';
import UserManageContainer from 'components/modal/UserModal/components/UserManageContainer/UserManageContainer';
import { UserEdit } from 'data/interfaces/user/UserEdit';
import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { editUser } from 'store/user/actions/edit-user.action';
import { logoutAllUser } from 'store/user/actions/logout-all-user-action';

const UserManageEdit = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const {token, user} = useSelector((state: RootState) => state.user);
  const {userName} = user;

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const currentPasswordRef = useRef<HTMLInputElement>(null);

  const editUserHandler = (event: FormEvent) => {
    event.preventDefault();

    const loginValue = loginRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    const currentPasswordValue = currentPasswordRef.current?.value;

    if(!currentPasswordValue) {
      currentPasswordRef.current?.focus();
      return;
    }

    const editData = {
      userName: loginValue,
      password: passwordValue,
      currentPassword: currentPasswordValue
    } as UserEdit;

    const logout = () => {
      dispatch(logoutAllUser(token));
    }

    dispatch(editUser(token, editData, logout));
  }

  return (
    <UserManageContainer
      title='Edytuj dane'
      text='Edytuj swoje dane'
    >
      <MainForm
        onSubmit={editUserHandler}
        buttonTitle='Edytuj'
      >
        <UserNameInput
          ref={loginRef}
          title='Nazwa Użytkownika'
          value={userName}
          
        />
        <PasswordValidatedInput 
          ref={passwordRef}
          title='Nowe Hasło'
        />
        <PasswordInput
          ref={currentPasswordRef}
          title={'Obecne Hasło'}
        />
      </MainForm>
    </UserManageContainer>
  )
}

export default UserManageEdit;