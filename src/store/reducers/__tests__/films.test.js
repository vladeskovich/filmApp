import films from '../films';

const initialState = {
  loading: false,
  numberPage: 1,
  films: [],
};

const testDataFilms = [
  {
    id: 1,
    runtime: 86,
  },
  {
    id: 2,
    runtime: 116,
  },
  {
    id: 3,
    runtime: 76,
  },
];

describe('films', () => {
  it('test films reducer', () => {
    let state;

    state = films(initialState, {
      type: 'SET_STATUS',
      loading: true,
    });

    expect(state.loading).toBe(true);

    state = films(initialState, {
      type: 'CONCAT_FILMS',
      data: testDataFilms,
    });

    expect(state.films.length).toBe(3);

    state = films(initialState, {
      type: 'RESET_FILMS',
    });

    expect(state.films.length).toBe(0);

    state = films(initialState, {
      type: 'RESET_FILMS_RRR',
    });

    expect(state.films.length).toBe(0);
    expect(state.loading).toBe(false);
  });
});
