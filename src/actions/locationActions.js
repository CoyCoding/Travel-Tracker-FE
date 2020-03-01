import axios from 'axios';
import authHeaders from './utils/authHeaders';

export const MOVE_LOCATION = "ADD_LOCATION";

export const NEW_LOCATION = "NEW_LOCATION";

export const addLocation = () => dispatch => {
  console.log('action')
  dispatch({
    type: NEW_LOCATION,
    newLocation: {_id: "5e597929063",
    longitude: 50,
    latitude: 0,
    title: "First Location Matt",
    user_id: "5e54062f54b93091dcf25b17",
    images: [],
    createdAt: "2020-02-28T20:33:45.748Z",
    updatedAt: "2020-02-28T20:33:45.748Z",
    user: "tony"}
  })
}