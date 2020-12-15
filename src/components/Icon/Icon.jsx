import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Star from '../../assets/icons/star.svg';
import Arrow from '../../assets/icons/arrow.svg';
import List from '../../assets/icons/list.svg';
import Grid from '../../assets/icons/grid.svg';
import Play from '../../assets/icons/play.svg';
import Cross from '../../assets/icons/cross.svg';

import styles from './Icon.scss';

const icons = {
  play: Play,
  list: List,
  grid: Grid,
  cross: Cross,
  arrow: Arrow,
  star: Star,
};

const Icon = ({
  name,
  className,
  onClick,
  ...props
}) => {
  const classes = classNames(styles.icon, className);
  const Component = icons[name.toLowerCase()];

  return (
    <Component
      onClick={onClick}
      className={classes}
      {...props}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  name: 'Cross',
};

export default Icon;
