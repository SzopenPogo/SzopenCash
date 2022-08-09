import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { BACKEND_USER_LOGOUT_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";

export const logoutUser = (token: string) => async (dispatch: Dispatch) => {
  dispatch(userActions.logout({type: USER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const logoutUserRequest = async () => {
    return await axios.post(BACKEND_USER_LOGOUT_URL, {}, config);
  }

  try {
    const {data} = await logoutUserRequest();
    
    dispatch(userActions.logout({
      type: USER_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(userActions.logout({
      type: USER_FAIL,
      payload: error.response.data.message
    }))
  }
}