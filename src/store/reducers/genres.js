const SET_GENRES = 'SET_GENRES';

export const initialState = {
  genres: [],
};

const genres = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_GENRES:
      return {
        ...state,
        genres: data,
      };
    default:
      return state;
  }
};

export default genres;
