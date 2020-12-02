import { SET_LOADING_VIDEO, SET_VIDEOS } from '../../constants/actionTypes';

export const initialState = {
  videos: [],
  loadingVideo: false,
};

const videos = (state = initialState, action) => {
  const { data, type, loadingVideo } = action;
  switch (type) {
    case SET_VIDEOS:
      debugger;
      return {
        ...state,
        videos: data,
      };
    case SET_LOADING_VIDEO:
      debugger;
      return {
        ...state,
        loadingVideo,
      };
    default:
      return state;
  }
};

export default videos;
