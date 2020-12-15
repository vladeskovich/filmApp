import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const BarItem = ({
  onClick,
  id,
  activeItem,
  name,
  ...props
}) => {
  const checkedItem = activeItem === id;

  return (
    <>
      <Input
        checked={checkedItem}
        type='radio'
        name={name}
        id={name}
      />
      <label
        onClick={() => onClick(id - 1)}
        htmlFor={name}
        {...props}
      >
      </label>
    </>
  );
};

BarItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  activeItem: PropTypes.number,
  name: PropTypes.number,
};

BarItem.defaultProps = {};

export default BarItem;
