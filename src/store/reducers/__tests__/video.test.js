import video from '../video';

const initialState = {
  videos: [],
};

const testDataVideos = [
  {
    id: 1,
    type: 'trailer',
  },
  {
    id: 2,
    name: 'trailer',
  },
];

describe('Videos', () => {
  it('test video reducer', () => {
    let state;

    state = video(initialState, {
      type: 'SET_VIDEOS',
      data: testDataVideos,
    });

    expect(state.videos.length).toBe(2);

    state = video(initialState, {
      type: 'SET_VIDEOS_RRR',
      data: testDataVideos,
    });

    expect(state.videos.length).toBe(0);
  });
});
