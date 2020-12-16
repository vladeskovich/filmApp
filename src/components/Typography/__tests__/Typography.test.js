import React from 'react';
import Typography from '../Typography';

describe('Typography', () => {
  const props = {
    variant: 'header1',
    className: 'test-text',
  };

  it('should render Typography component without props', () => {
    const component = shallow(<Typography>Ok</Typography>);

    expect(component).toMatchSnapshot();
  });

  it('should render Typography component with props', () => {
    const component = shallow(<Typography {...props}>Ok</Typography>);

    expect(component).toMatchSnapshot();
  });
});
