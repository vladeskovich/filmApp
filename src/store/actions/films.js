import request from '../../constants/request';

export const getFilms = () => (dispatch, getState) => {
  const { films: { numberPage } } = getState();

  dispatch({ type: 'SET_STATUS', loading: true });

  request.get(`/movie/popular?page=${numberPage}`)
    .then((response) => {
      const { data: { results: films } } = response;

      Promise.all(films.map((film) => request.get(`/movie/${film.id}`)))
        .then((filmsDetails) => {
          dispatch({ type: 'SET_FILM', data: filmsDetails.map((film) => film.data) });
          dispatch({ type: 'SET_STATUS', loading: false });
        });
    });
};
