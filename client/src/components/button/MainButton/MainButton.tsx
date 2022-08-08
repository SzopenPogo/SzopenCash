import classes from './MainButton.module.scss';

interface Props {
  title: string;
  isSubmit?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const MainButton = ({
  title,
  isSubmit = false,
  isActive = true,
  onClick
}: Props) => {
  const buttonType = isSubmit ? 'submit' : 'button';
  
  return (
    <button
      className={classes['main-button']}
      type={buttonType}
      onClick={onClick}
      disabled={!isActive}
    >
      {title}
    </button>
  )
}

export default MainButton;