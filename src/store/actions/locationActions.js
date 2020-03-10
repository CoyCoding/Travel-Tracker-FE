import axios from 'axios';
import authHeaders from './utils/authHeaders';

export const MOVE_LOCATION = "ADD_LOCATION";

export const NEW_LOCATION = "NEW_LOCATION";

export const MOVE_VIEWPORT= "MOVE_VIEWPORT";

export const addLocation = (location) => dispatch => {
  console.log('ADD LOCATION')
  dispatch({
    type: NEW_LOCATION,
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