import {
  MOVE_LOCATION,
  NEW_LOCATION,
  MOVE_VIEWPORT,
} from '../actions/locationActions';

const initialState = {
    movingMarker: false,
    firstMove: false,
    location: {title: "", latitude: 0, longitude: 0},
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 38.7577,
      longitude: -90.4376,
      zoom: 2
    }
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case MOVE_LOCATION:
      return{
        ...state,
        location: { ...state.location, ...action.location},
        creatingNewMarker: false
      }
    case NEW_LOCATION:
      return {
        ...state,
        movingMarker: true,
        location: {latitude: state.viewport.latitude, longitude: state.viewport.longitude}
      }
    case MOVE_VIEWPORT:
      return {
        ...state,
        viewport: action.viewport
      }
    default:
      return state
  }
}

export default userReducer;