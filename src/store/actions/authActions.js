import axios from 'axios';

export const LOGGING_IN = "LOG_IN_ATTEMPT";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const GET_USER_INFO_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

export const SIGNING_UP = "SIGNING_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const LOG_OUT = "LOG_OUT";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = (user) => dispatch => {
  dispatch({
    type: LOGGING_IN
  });
  axios.post('/auth/login', user)
    .then(res => {
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        info: res.data,
      })
      dispatch({
        type: LOG_IN_SUCCESS,
        token: res.headers['access-token'],
        info: res.data,
      })
    }).then()
    .catch(err => {
      dispatch({
        type: LOG_IN_FAIL,
        error: err.response.data.error || 'API down'
      })
    })
}

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
}

export const signup = (user) => dispatch => {
  dispatch({
    type: SIGNING_UP
  });
  axios.post('/auth/sign-up', user)
    .then(res => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        info: res.data,
        token: res.headers['access-token'],
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type:  SIGN_UP_FAIL,
        error: err.response.data.error || 'API down'
      })
    });
}


export const logout = (user) => dispatch => {
  console.log('You Are Logging out! Yes I know this is here...')
  dispatch({
    type: LOG_OUT
  })
}