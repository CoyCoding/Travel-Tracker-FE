import axios from 'axios';
import authHeaders from './utils/authHeaders';

export const ADDING_LOCATION = "ADDING_LOCATION";
export const ADD_LOCATION_SUCCESS = "ADD_LOCATION_SUCCESS";
export const ADD_LOCATION_FAIL = "ADD_LOCATION_FAIL";

export const MOVE_LOCATION = "ADD_LOCATION";

export const ADD_MARKER = "ADD_MARKER";

export const MOVE_VIEWPORT= "MOVE_VIEWPORT";

export const addMarker = (location) => dispatch => {
  dispatch({
    type: ADD_MARKER,
    location: location
  })
}

export const moveLocation = (location) => dispatch => {
  dispatch({
    type: MOVE_LOCATION,
    location: location
  })
}

export const moveViewport = (viewport) => dispatch => {
  dispatch({
    type: MOVE_VIEWPORT,
    viewport: viewport
  })
}

export const addLocation = (location) => dispatch => {
  dispatch({
    type: ADDING_LOCATION,
  })
  axios.post('/api/locations', location, authHeaders).then((res)=>{
    console.log('here')
    dispatch({
      type: ADD_LOCATION_SUCCESS,
      location: location,
    })
  }).catch((err) => {
    console.log(err)
    dispatch({
      type: ADD_LOCATION_FAIL,
      error: err.response.data.error || 'API down'
    })
  })
}