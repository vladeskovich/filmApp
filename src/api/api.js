import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const API_KEY = '2758a9f62ef8d91cfef2a83be3b876bb';

export const filmAPI = {
  getTrendingFilms() {
    return instance.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        debugger;
        return response.data.results;
      });
  },
};
