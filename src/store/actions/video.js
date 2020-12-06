import request from '../../constants/request';

export const getVideos = (id) => (dispatch) => {
  request.get(`/movie/${id}/videos`)
    .then((response) => {
      const { data: { results } } = response;

      dispatch({ type: 'SET_VIDEOS', data: results });
    });
};

export const resetVideo = () => (dispatch) => {
  dispatch({ type: 'SET_VIDEOS', data: [] });
};
