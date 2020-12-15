import React from 'react';
import VoteCount from '../VoteCount';

describe('VoteCount', () => {
  const props = {
    rating: 8,
    className: 'test-vote',
  };

  it('should render VoteCount component props', () => {
    const component = mount(<VoteCount {...props}/>);

    expect(component).toMatchSnapshot();
  });
});
