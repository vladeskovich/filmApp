import React from 'react';
import Image from '../Image';

describe('Image', () => {
  const props = {
    src: 'assets/image',
    className: 'buttonTest',
  };

  it('should render Image component without props', () => {
    const component = shallow(<Image/>);

    expect(component).toMatchSnapshot();
  });

  it('should render Image component with props', () => {
    const component = shallow(<Image {...props}/>);

    expect(component).toMatchSnapshot();
  });
});
