import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import styles from './Portal.scss';

const dialogElement = document.getElementById('dialog');

const Portal = ({
  children,
}) => ReactDom.createPortal(children, dialogElement);

Portal.propTypes = {
  children: PropTypes.node,
};

Portal.defaultProps = {};

export default Portal;
