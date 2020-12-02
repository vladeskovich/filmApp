import instance from '../../constants/instance';
import API_KEY from '../../constants/api';

export const initializeGenres = () => (dispatch) => {
  instance.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      dispatch({ type: 'SET_GENRES', data: response.data.results });
    });
};
