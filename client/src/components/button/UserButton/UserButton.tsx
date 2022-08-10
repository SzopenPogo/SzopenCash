import classes from './UserButton.module.scss';
import employeeIcon from 'assets/images/icon/white/employeeIcon.svg'
import adminIcon from 'assets/images/icon/white/adminIcon.svg'
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useState } from 'react';
import UserModal from 'components/modal/UserModal/UserModal';

const UserButton = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const isUser = user !== undefined;

  const [isUserModal, setIsUserModal] = useState<boolean>(false);

  const toggleUserModal = () => {
    setIsUserModal(!isUserModal);
  }


  const buttonBackroundImage = isUser && user.isAdmin ? adminIcon : employeeIcon;

  return (
    <>
      <button
        className={classes['user']}
        type='button'
        title='Konto'
        onClick={toggleUserModal}
        style={{
          backgroundImage: `url('${buttonBackroundImage}')`
        }}
      />
      <UserModal isActive={isUserModal} closeModal={toggleUserModal} />
    </>
  )
}

export default UserButton;