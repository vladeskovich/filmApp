import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './Error.scss';

const Error = ({
  text,
}) => (
      <Typography className={styles.errorMessage}>{text}</Typography>
);

Error.propTypes = {};

Error.defaultProps = {};

export default Error;
