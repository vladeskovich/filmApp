import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './Footer.scss';

const Footer = () => (
  <div className={styles.footer}>
      <Typography className={styles.nameProject}>FILMS</Typography>
      <Typography className={styles.author}>
        Copyright © { new Date().getFullYear() } Litvinko Vlad
      </Typography>

  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
