import request from '../../constants/request';

const routesMap = {
  '': 'popular',
  trending: 'popular',
  'top-rated': 'top_rated',
  'coming-soon': 'upcoming',
};

export const getFilms = (pathname, routeParam) => (dispatch, getState) => {
  const { films: { numberPage } } = getState();
  // const { params: { genreId = 1 } } = routeParam;
  // const genreId = null;
  const pureRoute = pathname.slice(1);
  const apiRoute = routesMap[pureRoute];
  debugger;
  const stringRequest = routeParam
    ? `/discover/movie?page=${numberPage}&with_genres=${routeParam.params.genreId}`
    : `/movie/${apiRoute}?page=${numberPage}`;

  debugger;
  dispatch({ type: 'SET_STATUS', loading: true });

  request.get(stringRequest)
    .then((response) => {
      const { data: { results: films } } = response;
      debugger;
      Promise
        .all(films.map((film) => request.get(`/movie/${film.id}`)))
        .then((filmsDetails) => {
          debugger;
          dispatch({ type: 'CONCAT_FILMS', data: filmsDetails.map((film) => film.data) });
          dispatch({ type: 'SET_STATUS', loading: false });
        });
    });
};

export const resetFilms = () => (dispatch) => {
  dispatch({ type: 'RESET_FILMS' });
};
