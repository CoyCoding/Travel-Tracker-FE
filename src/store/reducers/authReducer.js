import {
    LOGGING_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    LOG_OUT,
    SIGNING_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    CLEAR_ERRORS,
} from '../actions/authActions'

const initialState = {
    accessToken: localStorage.getItem('access-token'),
    isLoggedIn: !!localStorage.getItem('access-token'),
    error: undefined,
    attemptingLogIn: false,
    userId: undefined,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
          return {
              ...state,
              error: undefined,
              attemptingLogIn: true
          }
        case LOG_IN_SUCCESS:
          localStorage.setItem('access-token', action.token)
          console.log(action.info)
          return {
              ...state,
              isLoggedIn: true,
              attemptingLogIn: false,
              accessToken: localStorage.getItem('access-token'),
              userId: action.info._id
          }
        case LOG_IN_FAIL:
          return {
              ...state,
              error: action.error.message,
              attemptingLogIn: false,
              isLoggedIn: false
          }
        case SIGNING_UP:
          return {
              ...state,
              error: undefined,
              attemptingLogIn: true,
          }
        case SIGN_UP_SUCCESS:
          localStorage.setItem('access-token', action.token)
          return {
              ...state,
              isLoggedIn: true,
              accessToken: localStorage.getItem('access-token'),
              attemptingLogIn: false,
          }
        case SIGN_UP_FAIL:
          return {
              ...state,
              error: action.error.message,
              isLoggedIn: false,
              attemptingLogIn: false
          }
        case LOG_OUT:
          localStorage.removeItem('access-token');
          return{
              state: initialState
          }
        case CLEAR_ERRORS:
        console.log('clear errors')
          return{
            ...state,
            error: undefined,
          }
        default:
          return state
      }
}

export default authReducer;
