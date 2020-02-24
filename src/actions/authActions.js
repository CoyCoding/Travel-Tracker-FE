import axios from 'axios';

export const LOGGING_IN = "LOG_IN_ATTEMPT";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

export const SIGNING_UP = "SIGNING_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const LOG_OUT = "LOG_OUT_SUCCESS";

export const login = (user) => dispatch => {
  dispatch({
    type: LOGGING_IN
  });
  axios.post('http://localhost:6161/auth/login', user)
    .then(res => {
      dispatch({
        type: LOG_IN_SUCCESS,
        payload: res.data,
        token: res.headers['access-token'],
      })
    })
    .catch(err => {
      dispatch({
        type: LOG_IN_FAIL,
        error: err.response.data.error
      })
    })
}

export const signup = (user) => dispatch => {
  dispatch({
    type: SIGNING_UP
  });
  axios.post('http://localhost:6161/auth/sign-up', user)
    .then(res => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
        token: res.headers['access-token'],
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type:  SIGN_UP_FAIL,
        error: err.response.data.error
      })
    });
}


export const logout = (user) => dispatch => {
  console.log('You Are Logging out! Yes I know this is here...')
  dispatch({
    type: LOG_OUT
  })
}