import classes from './UserButton.module.scss';
import employeeIcon from 'assets/images/icon/white/employeeIcon.svg'
import adminIcon from 'assets/images/icon/white/adminIcon.svg'
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const UserButton = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const isUser = user !== undefined;


  const toggleUserModal = () => {

  }


  const buttonBackroundImage = isUser && user.isAdmin ? adminIcon : employeeIcon;

  return (
    <button
      className={classes['user']}
      type='button'
      title='Konto'
      onClick={toggleUserModal}
      style={{
        backgroundImage: `url('${buttonBackroundImage}')`
      }}
    />
  )
}

export default UserButton;