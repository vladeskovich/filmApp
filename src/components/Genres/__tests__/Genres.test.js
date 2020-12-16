import React from 'react';
import Genres from '../Genres';

describe('Genres', () => {
  const props = {
    data: [
      { id: 1, name: 'Action' },
    ],
  };

  it('should render Genres component with props', () => {
    const component = mount(<Genres {...props}/>);

    expect(component.find('ul').length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
