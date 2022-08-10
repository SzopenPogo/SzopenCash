import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { BACKEND_USER_TOGGLE_STATUS_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";

export const changeStatusUser = (
  token: string,
  _id: string
) => async (dispatch: Dispatch) => {
  dispatch(userActions.changeStatus({type: USER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const changeStatusUserRequest = async () => {
    const URL = `${BACKEND_USER_TOGGLE_STATUS_URL}/${_id}`;
    return await axios.patch(URL, {}, config);
  }

  try {
    const {data} = await changeStatusUserRequest();
    
    dispatch(userActions.changeStatus({
      type: USER_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(userActions.changeStatus({
      type: USER_FAIL,
      payload: error.response.data.message
    }))
  }
}