import React from 'react';
import Button from '../Button';

describe('Button', () => {
  const props = {
    type: 'submit',
    outline: true,
    color: 'blue',
    className: 'buttonTest',
  };

  it('should render Button component with props', () => {
    const component = shallow(<Button {...props}>Ok</Button>);

    expect(component).toMatchSnapshot();
  });
});
