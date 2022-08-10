import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { UserEdit } from "data/interfaces/user/UserEdit";
import { BACKEND_USER_EDIT_URL } from "data/routes/backend/user";
import { userActions } from "store/user/user-slice";
import { filterEmptyObject } from "utils/object/filterEmptyObject";

export const editUser = (
  token: string,
  editData: UserEdit,
  logout: () => void
) => async (dispatch: Dispatch) => {
  dispatch(userActions.edit({type: USER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const filteredEditData = filterEmptyObject(editData);

  const editUserRequest = async () => {
    return await axios.patch(BACKEND_USER_EDIT_URL, filteredEditData, config);
  }

  try {
    const {data} = await editUserRequest();
    
    dispatch(userActions.edit({
      type: USER_SUCCESS,
      payload: data
    }));
    
    logout();
  } catch (error: any) {
    dispatch(userActions.edit({
      type: USER_FAIL,
      payload: error.response.data.message
    }))
  }
}