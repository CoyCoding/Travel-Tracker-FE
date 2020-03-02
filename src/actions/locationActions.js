import axios from 'axios';
import authHeaders from './utils/authHeaders';

export const MOVE_LOCATION = "ADD_LOCATION";

export const NEW_LOCATION = "NEW_LOCATION";

export const addLocation = (location) => dispatch => {
  console.log('action')
  dispatch({
    type: NEW_LOCATION,
    location: location
  })
}