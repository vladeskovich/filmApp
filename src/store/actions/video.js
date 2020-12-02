import instance from '../../constants/instance';
import API_KEY from '../../constants/api';

export const getVideos = (id) => (dispatch) => {
  debugger;
  dispatch({ type: 'SET_LOADING_VIDEO', loadingVideo: true });

  instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      const { data: { results } } = response;
      debugger;
      dispatch({ type: 'SET_VIDEOS', data: results });
      dispatch({ type: 'SET_LOADING_VIDEO', loadingVideo: false });
    });
};
