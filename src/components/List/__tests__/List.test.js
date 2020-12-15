import React from 'react';
import List from '../List';

describe('List', () => {
  it('should render List component ', () => {
    const props = {
      data: [
        { id: 1, name: 'Action' },
      ],
      className: 'test-list',
      direction: 'vertical',
      itemClassName: 'test-list',
      ordered: true,
    };

    const component = render(<List {...props}>{(element) => (
      <div>{element.name}</div>
    )
    }</List>);
    expect(component).toMatchSnapshot();
  });

  it('should render List component ', () => {
    const props = {
      data: [
        { name: 'Action' },
      ],
      className: 'test-list',
      direction: 'vertical',
      itemClassName: 'test-list',
      ordered: false,
    };

    const component = render(<List {...props}>{(element) => (
      <div>{element.name}</div>
    )
    }</List>);
    expect(component).toMatchSnapshot();
  });
});