import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import styles from './Portal.scss';

const Portal = ({
  children,
}) => {
  const element = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, []);

  return ReactDom.createPortal(children, element);
};

Portal.propTypes = {};

Portal.defaultProps = {};

export default Portal;
