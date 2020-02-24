import axios from 'axios';
import headers from './utils/authHeaders';

export const GETTING_CURRENT_USER = "GETTING_CURRENT_USER";
export const GET_USER_INFO_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_USER_INFO_FAIL = "FETCH_CURRENT_USER_FAIL";

export const CLEAR_USER_ERRORS = "CLEAR_ERRORS";

export const getUserInfo = () => dispatch => {
  dispatch({
    type: GETTING_CURRENT_USER
  });
  axios.get('/api/locations', headers)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GETTING_CURRENT_USER,
        info: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETTING_CURRENT_USER,
        error: err.data.error.message || 'Api Down'
      });
    });
}

export const clearUserErrors = () => dispatch => {
  dispatch({
    type: CLEAR_USER_ERRORS
  });
}