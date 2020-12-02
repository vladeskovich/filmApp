import { SET_FILM, SET_STATUS } from '../../constants/actionTypes';

export const initialState = {
  loading: false,
  numberPage: 1,
  films: [],
};

const films = (state = initialState, action) => {
  const { type, loading, data } = action;

  switch (type) {
    case SET_STATUS:
      return {
        ...state,
        loading,
      };
    case SET_FILM:
      return {
        ...state,
        films: [...state.films, ...data.map((film) => ({
          slideImage: film.backdrop_path,
          titleFilm: film.original_title,
          voteCount: film.vote_average,
          runtime: film.runtime,
          genres: film.genres,
          overview: film.overview,
          id: film.id,
        }))],
        numberPage: state.numberPage + 1,
      };
    default:
      return state;
  }
};

export default films;
