import React from 'react';
import Slide from '../Slide';

describe('Slide', () => {
  const props = {
    slideImage: '/w56545447547745',
    titleFilm: 'Inferno',
    voteCount: 8,
    runtime: 145,
    genres: [
      { name: 'Action' },
      { name: 'Adventure' },
    ],
    onShow: () => {},
    id: 1,
  };

  it('should render Slide component with props', () => {
    const component = shallow(<Slide {...props}/>);

    expect(component).toMatchSnapshot();
  });
});
