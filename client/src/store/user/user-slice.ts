import { createSlice } from "@reduxjs/toolkit";
import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "data/constants/user/user";
import { USER_TOKEN_COOKIE_NAME } from "data/constants/user/userCookies";
import Cookies from "js-cookie";

const userTokenStoredCookie = Cookies.get(USER_TOKEN_COOKIE_NAME)
const tokenCookie = userTokenStoredCookie && userTokenStoredCookie !== 'undefined'
  ? userTokenStoredCookie
  : '';

const initialUserData = {
  _id: '',
  userName: '',
  isActive: false,
  isAdmin: false
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: '',
    user: initialUserData,
    token: tokenCookie
  },
  reducers: {
    login(state, action) {
      const { type, token, payload } = action.payload;
      
      switch (type) {
        case USER_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case USER_SUCCESS:
          state.loading = false;
          state.error = '';
          state.user = payload;
          state.token = token;

          Cookies.set(USER_TOKEN_COOKIE_NAME, token, { expires: 7 });
          break;
        case USER_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    },
    getMe(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case USER_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case USER_SUCCESS:
          state.loading = false;
          state.error = '';
          state.user = payload;
          break;
        case USER_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    },
    logout(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case USER_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case USER_SUCCESS:
          state.loading = false;
          state.error = '';
          state.user = initialUserData;
          state.token = '';

          Cookies.remove(USER_TOKEN_COOKIE_NAME);
          break;
        case USER_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    }

  }
});

export const userActions = userSlice.actions;
export default userSlice;