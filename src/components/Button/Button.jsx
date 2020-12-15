import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.scss';

const Button = ({
  type,
  outline,
  color,
  className,
  children,
  ...props
}) => {
  const classes = classNames(
    styles.button,
    className,
    { [styles.outline]: outline },
    { [styles[color]]: color },
  );

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
