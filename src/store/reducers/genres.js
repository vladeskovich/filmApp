import { SET_GENRES } from '../../constants/actionTypes';

export const initialState = {
  genres: [],
};

const genres = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_GENRES:
      return {
        ...state,
        genres: data,
      };
    default:
      return state;
  }
};

export default genres;
