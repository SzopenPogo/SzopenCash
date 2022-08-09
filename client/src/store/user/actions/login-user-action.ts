import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { BACKEND_USER_LOGIN_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";

export const loginUser = (
  userName: string, 
  password: string
) => async (dispatch: Dispatch) => {
  dispatch(userActions.login({ type: USER_REQUEST }));

  const loginUserRequest = async () => {
    return await axios.post(`${BACKEND_USER_LOGIN_URL}`, {
      userName,
      password
    });
  }

  try {
    const user = await loginUserRequest();
    const { token, userResponseData } = user.data;
    
    dispatch(userActions.login({
      type: USER_SUCCESS,
      token,
      payload: userResponseData
    }));
    
  } catch (error: any) {
    dispatch(userActions.login({
      type: USER_FAIL,
      payload: error.response.data.message
    }))
  }
}