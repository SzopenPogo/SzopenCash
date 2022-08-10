import Modal from 'components/modal/Modal/Modal';
import UserManageEdit from 'components/modal/UserModal/components/UserManageEdit/UserManageEdit';
import UserManageLogoutAll from 'components/modal/UserModal/components/UserManageLogoutAll/UserManageLogoutAll';
import classes from './UserModal.module.scss';

interface Props {
  isActive: boolean;
  closeModal: () => void;
}

const UserModal = ({
  isActive,
  closeModal
}: Props) => {
  return (
    <Modal 
      activate={isActive} 
      timeout={200}
      closeModal={closeModal}
    >
      <div className={classes['user-modal']}>
        <UserManageLogoutAll />
        <UserManageEdit />
      </div>
    </Modal>
  )
}

export default UserModal;