import React from 'react';
import Input from '../Input';

describe('Input', () => {
  const props = {
    type: 'radio',
    className: 'inputTest',
    handleChange: () => {},
  };

  it('should render Input component without props', () => {
    const component = mount(<Input/>);

    expect(component).toMatchSnapshot();
  });

  it('should render Input component with props', () => {
    const component = mount(<Input {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should call onChange method', () => {
    const mockCallBack = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'test-value' },
    };

    const component = shallow(<Input handleChange={mockCallBack}/>);

    component.find('input').simulate('change', event);

    expect(mockCallBack).toBeCalledWith(event);
    expect(component).toMatchSnapshot();
  });
});
