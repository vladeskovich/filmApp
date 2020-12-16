import React from 'react';
import Input from '../Input';

describe('Input', () => {
  const props = {
    type: 'radio',
    className: 'inputTest',
    handleChange: () => {},
  };

  it('should render Input component with props', () => {
    const component = shallow(<Input {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should call onChange method', () => {
    const mockCallBack = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'test-value' },
    };

    const component = shallow(<Input onChange={mockCallBack}/>);

    component.find('input').simulate('change', event);

    expect(mockCallBack).toBeCalledWith(event);
  });
});
