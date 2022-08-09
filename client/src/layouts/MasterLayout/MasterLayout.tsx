import { Dispatch } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getApiData } from 'store/apiData/actions/get-api-data-action';

interface Props {
  children: ReactNode
}

const MasterLayout = ({children}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;

  useEffect(() => {
    //  Get api data from backend
    dispatch(getApiData());
  }, [dispatch]);

  return (
    <>
      {children}
    </>
  )
}

export default MasterLayout;