import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import styles from './Dialog.scss';

const Dialog = ({
  data,
  isOpen,
  onCancel,
  children,
  loadingVideo,
}) => (
  <>
    {isOpen && (
      <Portal>
        {console.log(data, isOpen, loadingVideo)}
        <div
          className={styles.modalOverlay}
          onClick={onCancel}
        >
          <div className={styles.modalWindow}>
            {React.cloneElement(children, {
              data,
              onCancel,
              loadingVideo,
            })}
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
