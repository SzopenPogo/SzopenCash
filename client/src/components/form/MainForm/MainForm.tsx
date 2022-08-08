import MainButton from 'components/button/MainButton/MainButton';
import { FormEvent, ReactNode } from 'react';
import classes from './MainForm.module.scss';

interface Props {
  children: ReactNode;
  onSubmit: (event: FormEvent) => void;
  buttonTitle: string;
  title?: string;
  isActive?: boolean;
}

const MainForm = ({
  children,
  onSubmit,
  buttonTitle,
  title,
  isActive
}: Props) => {
  return (
    <form 
      className={classes['form']}
      onSubmit={onSubmit}
    >
      {title && <h1 className={classes['form__title']}>{title}</h1>}
      {children}
      <div className={classes['form__submit']}>
        <MainButton
          title={buttonTitle}
          isSubmit={true}
          isActive={isActive}
        />
      </div>
    </form>
  )
}

export default MainForm;