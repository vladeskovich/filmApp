import instance from '../../constants/request';
import API_KEY from '../../constants/api';

export const getVideos = (id) => (dispatch) => {
  instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      const { data: { results } } = response;

      dispatch({ type: 'SET_VIDEOS', data: results });
    });
};

export const resetVideo = (resetData) => (dispatch) => {
  dispatch({ type: 'SET_VIDEOS', data: resetData });
};
