import {
  GETTING_CURRENT_USER,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  CLEAR_USER_ERRORS,
} from '../actions/userActions';

const initialState = {
    info: undefined,
    gettingUserInfo: false,
    error: undefined,
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case GETTING_CURRENT_USER:
      return {
        ...state,
        gettingUserInfo: true,
      }
    case GET_USER_INFO_SUCCESS:
      return{
        ...state,
        user: action.info,
        gettingUserInfo: false,
      }
    case GET_USER_INFO_FAIL:
      return{
        ...state,
        error: action.error.message,
        gettingUserInfo: false,
      }
    case CLEAR_USER_ERRORS:
      return{
        ...state,
        error: undefined,
      }
    default:
      return state
  }
}

export default userReducer;