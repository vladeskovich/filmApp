import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const BarItem = ({
  id,
  checked,
  name,
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
      <label for={nameId}></label>
    </>
  );
};

BarItem.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
};

BarItem.defaultProps = {};

export default BarItem;
