import LogoutButton from 'components/button/LogoutButton/LogoutButton';
import UserButton from 'components/button/UserButton/UserButton';
import LogoLink from 'components/link/LogoLink/LogoLink';
import { CLIENT_APPLICATION_ROUTE } from 'data/routes/client/application';
import classes from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <header className={classes['header']}>
      <div className={classes['header__logo']}>
        <LogoLink route={CLIENT_APPLICATION_ROUTE} />
      </div>
      <div className={classes['header__account-buttons']}>
        <UserButton />
        <LogoutButton />
      </div>
    </header>
  )
}

export default AppHeader;