import { Link } from 'react-router-dom';
import classes from './LogoLink.module.scss';

interface Props {
  route: string;
}

const LogoLink = ({route}: Props) => {
  return (
    <Link
      className={classes['logo-link']}
      to={route}
    />
  )
}

export default LogoLink;