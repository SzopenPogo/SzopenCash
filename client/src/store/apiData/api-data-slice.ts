import { createSlice } from "@reduxjs/toolkit";
import { API_DATA_FAIL, API_DATA_REQUEST, API_DATA_SUCCESS } from "data/constants/apiData/apiData";

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    loading: false,
    error: null,
    apiData: {
      PASSWORD_MIN_LENGTH: 1,
      PASSWORD_REG_EXP: '',
      USER_NAME_MIN_LENGHT: 1
    }
  },
  reducers: {
    get(state, action) {
      const { type, payload } = action.payload;

      switch (type) {
        case API_DATA_REQUEST:
          state.loading = true;
          state.error = null;
          break;
        case API_DATA_SUCCESS:
          state.loading = false;
          state.error = null;
          state.apiData = payload;
          break;
        case API_DATA_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    }
  }
});

export const apiDataActions = apiDataSlice.actions;
export default apiDataSlice;