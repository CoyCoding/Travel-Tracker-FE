export const SET_FILTER = "ADD_FILTER";

export const setFilters = (filters) => dispatch => {
  dispatch({
    type: SET_FILTER,
    filters: filters,
  })
}