import axios from 'axios';
import authHeaders from './utils/authHeaders';

export const GETTING_CURRENT_USER = "GETTING_CURRENT_USER";
export const GET_CURRENT_USER_INFO_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_INFO_FAIL = "FETCH_CURRENT_USER_FAIL";

export const GETTING_USER_INFO = "GETTING_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";

export const CLEAR_USER_ERRORS = "CLEAR_ERRORS";
export const LOG_OUT = "LOG_OUT";

const errorDispatcher = (error) => dispatch => {
  const errorStatus = error.status || error.response.status;
  if(errorStatus === 401){
    dispatch({
      type: LOG_OUT
    })
  }
}

export const getCurrentUserInfo = () => dispatch => {
  dispatch({
    type: GETTING_CURRENT_USER
  });
  axios.get('/api/locations/', authHeaders)
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_CURRENT_USER_INFO_SUCCESS,
        info: res.data,
      });
    })
    .catch((err) => {
      errorDispatcher(err)(dispatch);
      dispatch({
        type: GET_CURRENT_USER_INFO_FAIL,
        error: err.response.data.error.message || 'Api Down',
      });
    });
}

export const getUserInfo = (username, history) => dispatch => {
  dispatch({
    type: GETTING_USER_INFO
  });
  console.log(authHeaders)
  axios.post('/api/locations/user', username, authHeaders)
    .then((res) => {
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        selectedUser: res.data,
      });
    })
    .catch((err) => {
      errorDispatcher(err)(dispatch);
      // Push Home on error other than 401
      history.push('/Home')
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