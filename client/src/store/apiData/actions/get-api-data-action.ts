import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { API_DATA_FAIL, API_DATA_REQUEST, API_DATA_SUCCESS } from "data/constants/apiData/apiData";
import { BACKEND_API_DATA_URL } from "data/routes/backend/apiData";
import { apiDataActions } from "store/apiData/api-data-slice";

export const getApiData = () => async (dispatch: Dispatch) => {
  dispatch(apiDataActions.get({type: API_DATA_REQUEST}));
  
  const getConfigRequest = async () => {
    return axios.get(BACKEND_API_DATA_URL);
  }

  try {
    const {data} = await getConfigRequest();
    dispatch(apiDataActions.get({
      type: API_DATA_SUCCESS,
      payload: data
    }))
  } catch (error: any) {
    dispatch(apiDataActions.get({
      type: API_DATA_FAIL,
      payload: error.response.data.message
    }))
  }
}