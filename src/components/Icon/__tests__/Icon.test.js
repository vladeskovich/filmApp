import React from 'react';
import Icon, { icons } from '../Icon';

describe('Icon', () => {
  const props = {
    name: 'Star',
    onClick: () => {},
    className: 'buttonTest',
  };

  it('should render Icon component', () => {
    const component = shallow(<Icon/>);

    expect(component).toMatchSnapshot();
  });

  it('should render Icon component with props', () => {
    const component = shallow(<Icon {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should check by tag name', () => {
    Object
      .keys(icons)
      .map((icon) => {
        const component = mount(<Icon name={icon}/>);

        expect(component.find('svg').length).toBe(1);
      });
  });
});
