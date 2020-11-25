import React from 'react';
import { connect } from 'react-redux';

import { setCount } from '../store/reducers/films';

const Test = (props) => (
  <div>
    {props.count}
    <button onClick={props.setCount}>+</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.appMain.count,
});

const mapDispatchToProps = (dispatch) => ({
  setCount: () => dispatch(setCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
