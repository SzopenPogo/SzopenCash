import { configureStore } from "@reduxjs/toolkit";
import apiDataSlice from "store/apiData/api-data-slice";
import clientSlice from "store/client/client-slice";
import userSlice from "store/user/user-slice";

const store = configureStore({
  reducer: {
    client: clientSlice.reducer,
    apiData: apiDataSlice.reducer,
    user: userSlice.reducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;