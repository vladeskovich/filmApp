import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import styles from './Dialog.scss';

const Dialog = ({
  data,
  isOpen,
  onCancel,
  children,
  onReset,
}) => (
  <>
    {isOpen && (
      <Portal>
        <div
          className={styles.modalOverlay}
          onClick={onCancel}
        >
          <div className={styles.modalWindow}>
            {React.cloneElement(children, {
              data,
              onCancel,
              onReset,
            })}
          </div>
        </div>
      </Portal>
    )
    }
  </>
);

Dialog.propTypes = {
  data: PropTypes.array,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onReset: PropTypes.func,
  children: PropTypes.node,
};

Dialog.defaultProps = {};

export default Dialog;
