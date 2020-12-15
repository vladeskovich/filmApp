import React from 'react';
import Button from '../Button';

describe('Button', () => {
  const props = {
    type: 'submit',
    outline: true,
    color: 'blue',
    className: 'buttonTest',
  };
  it('should render Button component without props', () => {
    const component = mount(<Button>Ok</Button>);
    expect(component).toMatchSnapshot();
  });
  it('should render Button component with props', () => {
    const component = mount(<Button {...props}>Ok</Button>);
    expect(component).toMatchSnapshot();
  });
});
