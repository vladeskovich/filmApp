import { genresAPI } from '../../utils/api';

const SET_GENRES = 'SET_GENRES';

export const initialState = {
  genres: [],
};

const genres = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        films: action.data,
      };
    default:
      return state;
  }
};

export default genres;
