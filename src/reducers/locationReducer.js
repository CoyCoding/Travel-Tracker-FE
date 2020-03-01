import {
  MOVE_LOCATION,
  NEW_LOCATION
} from '../actions/locationActions';

const initialState = {
    movingMarker: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case MOVE_LOCATION:
      return{
        ...state,
        locations: action.newLocation,
      }
    case NEW_LOCATION:
      return {
        ...state,
        movingMarker: true
      }
    default:
      return state
  }
}

export default userReducer;