import {
  MOVE_LOCATION,
  ADD_MARKER,
  MOVE_VIEWPORT,
  ADDING_LOCATION,
  ADD_LOCATION_SUCCESS,
  ADD_LOCATION_FAIL,
} from '../actions/locationActions';

import {
  LOG_OUT
} from '../actions/authActions';

const initialState = {
    movingMarker: false,
    firstMove: false,
    attemptingAddLocation: false,
    location: {title: '', latitude: 0, longitude: 0},
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 38.7577,
      longitude: -90.4376,
      zoom: 2
    }
}

const locationReducer = (state = initialState, action) => {
  switch (action.type){
    case MOVE_LOCATION:
      return{
        ...state,
        location: { ...state.location, ...action.location},
        creatingNewMarker: false
      }
    case ADD_MARKER:
      return {
        ...state,
        movingMarker: true,
        location: {...state.location, latitude: state.viewport.latitude, longitude: state.viewport.longitude}
      }
    case MOVE_VIEWPORT:
      return {
        ...state,
        viewport: {...action.viewport, width: '100%', height: '100%' }
      }
    case ADDING_LOCATION:
      return{
        ...state,
        attemptingAddLocation: true,
      }
    case ADD_LOCATION_SUCCESS:
      return{
        ...state,
        movingMarker: false,
        attemptingAddLocation: false,
      }
    case ADD_LOCATION_FAIL:
    return {
        ...state,
        error: action.error.message,
        attemptingAddLocation: false
    }
    case LOG_OUT:
      return{
        state: initialState
      }
    default:
      return state
  }
}

export default locationReducer;