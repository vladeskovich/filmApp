import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';

import styles from './Star.scss';

const Star = ({
  id,
  checked,
  className,
}) => {
  const classes = classNames(styles.star, className);

  return (
    <>
      <Input
        checked={checked === id}
        type='radio'
        name='star'
        id={id}
      />
      <label for={id}></label>
    </>
  );
};

Star.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
};

Star.defaultProps = {};

export default Star;
