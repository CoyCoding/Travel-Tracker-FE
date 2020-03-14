export const SET_FILTER = "ADD_FILTER";

export const toggleFilter = (filters) => dispatch => {
  dispatch({
    type: SET_FILTER,
    filters: filters,
  })
}