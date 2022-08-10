import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { BACKEND_USER_CREATE_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";

export const createUser = (
  token: string,
  userName: string,
  password: string
) => async (dispatch: Dispatch) => {
  dispatch(userActions.create({type: USER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const userData = {
    userName,
    password
  }

  const createUserRequest = async () => {
    return await axios.post(BACKEND_USER_CREATE_URL, userData, config);
  }

  try {
    const {data} = await createUserRequest();
    
    dispatch(userActions.create({
      type: USER_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(userActions.create({
      type: USER_FAIL,
      payload: error.response.data.message
    }))
  }
}