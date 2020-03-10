import axios from 'axios';
import authHeaders from './utils/authHeaders';
import { logout } from './authActions';

export const GETTING_CURRENT_USER = "GETTING_CURRENT_USER";
export const GET_USER_INFO_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_USER_INFO_FAIL = "FETCH_CURRENT_USER_FAIL";

export const CLEAR_USER_ERRORS = "CLEAR_ERRORS";
export const LOG_OUT = "LOG_OUT";

const onResponseSuccess = (res) => {
  return res;
}

const onResponseErr = (err) => dispatch => {

}

axios.interceptors.response.use(onResponseSuccess, onResponseErr)

export const getUserInfo = () => dispatch => {
  dispatch({
    type: GETTING_CURRENT_USER
  });
  axios.get('/api/locations', authHeaders)
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        info: res.data,
      });
    })
    .catch((err) => {
      // If status is 401 token is no longer valid log out
      // Dispatch Data Retreval fail message
      console.log(err)
      dispatch({
        type: GET_USER_INFO_FAIL,
        error: err.response.data.error.message || 'Api Down',
      });
    });
}

export const clearUserErrors = () => dispatch => {
  dispatch({
    type: CLEAR_USER_ERRORS
  });
}