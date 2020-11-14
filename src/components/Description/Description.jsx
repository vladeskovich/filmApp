import React from 'react';
import PropTypes from 'prop-types';
import getTimeFromMin from '../../utils/getTimeFromMin';

import styles from './Description.scss';

const Description = ({
  data,
  className,
}) => {
  return (
    <div className={styles.description}>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

Description.defaultProps = {};

export default Description;
