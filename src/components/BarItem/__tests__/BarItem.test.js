import React from 'react';
import BarItem from '../BarItem';

describe('BarItem', () => {
  const props = {
    id: 3,
    onClick: () => {},
    onChange: () => {},
    activeItem: 4,
    name: 'slider-navigation',
  };

  it('should render BarItem component', () => {
    const component = shallow(<BarItem {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<BarItem {...props} activeItem={3} onClick={mockCallBack}/>);

    expect(mockCallBack.mock.calls.length).toBe(0);
    component.find('label').simulate('click', { currentTarget: { dataset: { id: 1 } } });
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
