import {
  SET_FILTER
} from '../actions/markerFilterActions';

const initialState = {
  filters: {},
}

const markerFilterReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_FILTER:
      return{
        filters: action.filters
      }
    default:
      return state
  }
}

export default markerFilterReducer;