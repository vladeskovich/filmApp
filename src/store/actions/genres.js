import instance from '../../constants/instance';
import API_KEY from '../../constants/api';

export const initializeGenres = () => (dispatch) => {
  debugger;
  instance.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      debugger;
      const { data: { genres } } = response;
      dispatch({ type: 'SET_GENRES', data: genres });
    });
};
