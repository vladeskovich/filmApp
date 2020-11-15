import { filmAPI } from '../../api/api';

const SET_FILM = 'SET_FILM';

export const initialState = {
  films: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      return {
        ...state,
        films: action.data,
      };
    default:
      return state;
  }
};

export const setFilm = (results) => ({ type: 'SET_FILM', data: results });

export const initializeFilms = () => (dispatch) => {
  filmAPI.getTrendingFilms()
    .then((response) => {
      debugger;
      dispatch(setFilm(response));
    });
};

export default appReducer;
