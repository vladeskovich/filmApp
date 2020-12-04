import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './Error.scss';

const Error = () => (
      <Typography className={styles.errorMessage}>Error Loading</Typography>
);

Error.propTypes = {};

Error.defaultProps = {};

export default Error;
