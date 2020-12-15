import React from 'react';
import Typography from '../Typography';

describe('Typography', () => {
  const props = {
    variant: 'header1',
    className: 'test-text',
    onClick: () => {},
  };

  it('should render Typography component without props', () => {
    const component = mount(<Typography>Ok</Typography>);
    expect(component).toMatchSnapshot();
  });

  it('should render Typography component with props', () => {
    const component = mount(<Typography {...props}>Ok</Typography>);
    expect(component).toMatchSnapshot();
  });

  it('should call onClick method', () => {
    const mockCallBack = jest.fn();

    const component = shallow(<Typography {...props} onClick={mockCallBack}>Ok</Typography>);

    expect(mockCallBack.mock.calls.length).toBe(0);
    component.find('h1').simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
