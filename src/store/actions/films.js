import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
const API_KEY = '2758a9f62ef8d91cfef2a83be3b876bb';

export const initializeFilms = () => (dispatch) => {
  instance.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      const films = response.data.results;
      Promise.all(films.map((film) => instance.get(`/movie/${film.id}?api_key=${API_KEY}&language=en-US`)))
        .then((filmsDetails) => {
          dispatch({ type: 'SET_FILM', data: filmsDetails.map((film) => film.data) });
        });
    });
};