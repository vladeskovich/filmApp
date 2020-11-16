import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isFetch: state.fetch.isFetch,
});

export const withConditionalRendering = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isFetch) {
        return (
        <Component {...this.props}/>
        );
      }
      return null;
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};
