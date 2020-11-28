import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import Icon from '../Icon';
import styles from './Dialog.scss';

const Dialog = ({
  data,
  isOpen,
  onCancel,
  children,
}) => (
  <>
    {isOpen && (
      <Portal>
        <div className={styles.modalOverlay}>
          <div className={styles.closeContainer}>
            <Icon
              name='cross'
              className={styles.closeIcon}
              onClick={onCancel}
            />
          </div>
          <div className={styles.modalWindow}>
            {children(data)}
          </div>
        </div>
      </Portal>
    )
    }
  </>
);

Dialog.propTypes = {};

Dialog.defaultProps = {};

export default Dialog;
