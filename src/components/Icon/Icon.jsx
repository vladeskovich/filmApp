import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Star from '../../assets/icons/star.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Pinterest from '../../assets/icons/pinterest.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Youtube from '../../assets/icons/youtube.svg';
import Arrow from '../../assets/icons/arrow.svg';
import List from '../../assets/icons/list.svg';
import Square from '../../assets/icons/square.svg';
import Play from '../../assets/icons/play.svg';
import Cross from '../../assets/icons/cross.svg';

import styles from './Icon.scss';

const icons = {
  play: Play,
  list: List,
  square: Square,
  cross: Cross,
  arrow: Arrow,
  star: Star,
  facebook: Facebook,
  instagram: Instagram,
  pinterest: Pinterest,
  twitter: Twitter,
  youtube: Youtube,
};

const Icon = ({
  name,
  className,
  onClick,
}) => {
  const classes = classNames(styles.icon, className);
  const Component = icons[name.toLowerCase()];

  return (
    <Component
      onClick={onClick}
      className={classes}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Icon.defaultProps = {};

export default Icon;
