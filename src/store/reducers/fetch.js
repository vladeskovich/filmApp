const SET_FETCH = 'SET_FETCH';

export const initialState = {
  isFetch: true,
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCH:
      return {
        ...state,
        isFetch: action.isFetching,
      };
    default:
      return state;
  }
};

export default fetch;
