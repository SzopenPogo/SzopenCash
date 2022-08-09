import useDetectDevice from 'hooks/useDetectDevice';
import { ReactNode } from 'react';
import classes from './MainLayout.module.scss';

interface Props {
  children: ReactNode;
}

const MainLayout = ({
  children,
}: Props) => {
  useDetectDevice();

  return (
    <main className={classes['content']}>
      {children}
    </main>
  )
}

export default MainLayout;