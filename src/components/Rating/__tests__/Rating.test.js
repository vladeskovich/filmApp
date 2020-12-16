import React from 'react';
import Rating from '../Rating';

describe('Rating', () => {
  const props = {
    id: 5353,
    rating: 9,
  };

  it('should render Rating component with props', () => {
    const component = shallow(<Rating {...props}/>);

    expect(component).toMatchSnapshot();
  });
});
