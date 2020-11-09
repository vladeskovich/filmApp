import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';

import styles from './Star.scss';

const Star = ({
  checked,
  className,
}) => {
  const classes = classNames(styles.star, className);

  return (
    <label>
      <Input
        type='radio'
        name='star'
      />
    </label>
  );
};

Star.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
};

Star.defaultProps = {
};

export default Star;
