import {
    LOGGING_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    LOG_OUT,
    SIGNING_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
} from '../actions/authActions'

const initialState = {
    accessToken: localStorage.getItem('access-token'),
    isLoggedIn: !!localStorage.getItem('access-token'),
    error: undefined,
    atempttingLogIn: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        // Get Menu
        case LOGGING_IN:
          return {
              ...state,
              error: undefined
          }
        case LOG_IN_SUCCESS:
          localStorage.setItem('access-token', action.token)
          return {
              ...state,
              isLoggedIn: true,
              accessToken: localStorage.getItem('access-token'),
          }
        case LOG_IN_FAIL:
          return {
              ...state,
              error: action.error,
              isLoggedIn: false
          }
        case SIGNING_UP:
          return {
              ...state,
              error: undefined
          }
        case SIGN_UP_SUCCESS:
          localStorage.setItem('access-token', action.token)
          return {
              ...state,
              isLoggedIn: true,
              accessToken: localStorage.getItem('access-token'),
          }
        case SIGN_UP_FAIL:
          return {
              ...state,
              error: action.error,
              isLoggedIn: false
          }
        case LOG_OUT:
          localStorage.removeItem('access-token');
          return{
              ...state,
              isLoggedIn: false,
          }
        default:
          return state
      }
}

export default authReducer;
