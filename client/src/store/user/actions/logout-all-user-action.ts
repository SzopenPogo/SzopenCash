import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { BACKEND_USER_LOGOUT_ALL_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";

export const logoutAllUser = (token: string) => async (dispatch: Dispatch) => {
  dispatch(userActions.logout({type: USER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const logoutAllUserRequest = async () => {
    return await axios.post(BACKEND_USER_LOGOUT_ALL_URL, {}, config);
  }

  try {
    const {data} = await logoutAllUserRequest();
    
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

