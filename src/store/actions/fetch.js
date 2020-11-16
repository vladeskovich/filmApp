export const setIsFetch = (isFetch) => (dispatch) => {
  dispatch({ type: 'SET_FETCH', isFetching: isFetch });
};
