import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const BarItem = ({
  onClick,
  id,
  checked,
  name,
  ...props
}) => {
  const checkedItem = checked === id;
  const nameId = name + id;
  return (
    <>
      <Input
        checked={checkedItem}
        type='radio'
        name={name}
        id={nameId}
      />
      <label
        onClick={() => onClick(id - 1)}
        htmlFor={nameId}
        {...props}
      >
      </label>
    </>
  );
};

BarItem.propTypes = {
  checked: PropTypes.number,
  name: PropTypes.string,
};

BarItem.defaultProps = {};

export default BarItem;
