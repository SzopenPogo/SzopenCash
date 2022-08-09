import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { BACKEND_USER_GET_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";

export const getMeUser = (token: string) => async (dispatch: Dispatch) => {
  dispatch(userActions.getMe({type: USER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const getMeUserRequest = async () => {
    return await axios.get(BACKEND_USER_GET_URL, config);
  }

  try {
    const {data} = await getMeUserRequest();
    
    dispatch(userActions.getMe({
      type: USER_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(userActions.getMe({
      type: USER_FAIL,
      payload: error.response.data.message
    }))
  }
}