import React from 'react';
import ReactDOM from 'react-dom';
import Portal from '../Portal';

describe('Portal', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => element);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should render Portal component', () => {
    const component = shallow(<Portal><div>Modal Window</div></Portal>);
    expect(component).toMatchSnapshot();
  });
});
