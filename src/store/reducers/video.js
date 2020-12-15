import { SET_VIDEOS } from '../../constants/actionTypes';

export const initialState = {
  videos: [],
};

const videos = (state = initialState, action) => {
  const { data, type } = action;
  switch (type) {
    case SET_VIDEOS:
      return {
        ...state,
        videos: data,
      };
    default:
      return state;
  }
};

export default videos;
