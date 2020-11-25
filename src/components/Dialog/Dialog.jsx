import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import styles from './Dialog.scss';

const Dialog = ({
  isOpen,
  onCancel,
}) => (
  <Portal>
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        Hello hthr rthtrh
      </div>
    </div>
  </Portal>
);

Dialog.propTypes = {};

Dialog.defaultProps = {};

export default Dialog;
