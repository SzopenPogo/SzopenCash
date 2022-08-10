import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { BACKEND_USER_GET_BY_ID_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";

export const getByIdUser = (
  token: string,
  _id: string
) => async (dispatch: Dispatch) => {
  dispatch(userActions.getById({type: USER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const getByIdUserRequest = async () => {
    const URL = `${BACKEND_USER_GET_BY_ID_URL}/${_id}`;
    return await axios.get(URL, config);
  }

  try {
    const {data} = await getByIdUserRequest();
    
    dispatch(userActions.getById({
      type: USER_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(userActions.getById({
      type: USER_FAIL,
      payload: error.response.data.message
    }))
  }
}