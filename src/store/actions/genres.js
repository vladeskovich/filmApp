import request from '../../constants/request';

export const getGenres = () => (dispatch) => {
  request.get('/genre/movie/list')
    .then((response) => {
      const { data: { genres } } = response;

      dispatch({ type: 'SET_GENRES', data: genres });
    });
};
