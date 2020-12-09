import request from '../../constants/request';

const routesMap = {
  '': 'popular',
  trending: 'popular',
  'top-rated': 'top_rated',
  'coming-soon': 'upcoming',
  genre: 'genre',
};

export const getFilms = (pathname, resetPage) => (dispatch, getState) => {
  const { films: { numberPage } } = getState();
  const pureRoute = pathname.slice(1);
  const apiRoute = routesMap[pureRoute];

  dispatch({ type: 'SET_STATUS', loading: true });

  request.get(`/movie/${apiRoute}?page=${numberPage}`)
    .then((response) => {
      const { data: { results: films } } = response;

      Promise
        .all(films.map((film) => request.get(`/movie/${film.id}`)))
        .then((filmsDetails) => {
          dispatch({ type: 'SET_FILM', data: filmsDetails.map((film) => film.data) });
          dispatch({ type: 'SET_STATUS', loading: false });
        });
    });
};
