import instance from '../../constants/instance';
import API_KEY from '../../constants/api';

export const initializeFilms = () => (dispatch, getState) => {
  const { films: { numberPage } } = getState();

  dispatch({ type: 'SET_STATUS', loading: true });

  instance.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${numberPage}`)
    .then((response) => {
      const { data: { results: films } } = response;

      Promise.all(films.map((film) => instance.get(`/movie/${film.id}?api_key=${API_KEY}&language=en-US`)))
        .then((filmsDetails) => {
          dispatch({ type: 'SET_FILM', data: filmsDetails.map((film) => film.data) });
          dispatch({ type: 'SET_STATUS', loading: false });
        });
    });
};
