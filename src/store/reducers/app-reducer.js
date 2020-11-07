const SET_COUNT = 'SET_COUNT';

export const initialState = {
  count: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export const setCount = () => ({ type: 'SET_COUNT' });

export default appReducer;
