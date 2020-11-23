const SET_FILM = 'SET_FILM';

export const initialState = {
  numberPage: 1,
  films: [],
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      debugger;
      return {
        ...state,
        films: [...state.films, ...action.data.map((film) => ({
          slideImage: film.backdrop_path,
          titleFilm: film.original_title,
          voteCount: film.vote_average,
          runtime: film.runtime,
          genres: film.genres,
          overview: film.overview,
        }))],
        numberPage: state.numberPage + 1,
      };
    default:
      return state;
  }
};

export default films;
