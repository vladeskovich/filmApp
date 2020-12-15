import genres from '../genres';

const initialState = {
  genres: [],
};

const testDataGenres = [
  {
    id: 1,
    name: 'Drama',
  },
  {
    id: 2,
    name: 'Action',
  },
];

describe('genres', () => {
  it('test genres reducer', () => {
    let state;

    state = genres(initialState, {
      type: 'SET_GENRES',
      data: testDataGenres,
    });

    expect(state.genres.length).toBe(2);

    state = genres(initialState, {
      type: 'SET_GENRES_RRR',
      data: testDataGenres,
    });

    expect(state.genres.length).toBe(0);
  });
});
