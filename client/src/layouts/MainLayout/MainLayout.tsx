import { Dispatch } from '@reduxjs/toolkit';
import useDetectDevice from 'hooks/useDetectDevice';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import classes from './MainLayout.module.scss';

interface Props {
  children: ReactNode;
}

const MainLayout = ({children}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;
  useDetectDevice();

  return (
    <section className={classes['content']}>
      {children}
    </section>
  )
}

export default MainLayout;