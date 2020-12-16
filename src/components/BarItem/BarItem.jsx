import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const BarItem = ({
  onChange,
  onClick,
  id,
  activeItem,
  name,
}) => {
  const checkedItem = activeItem === id;

  const handleClick = useCallback((event) => {
    const { currentTarget: { dataset: { id } } } = event;

    onClick(id - 1);
  }, [onClick]);

  return (
    <>
      <Input
        checked={checkedItem}
        onChange={onChange}
        type='radio'
        name={name}
        id={name}
      />
      <label
        onClick={handleClick}
        data-id={id}
        htmlFor={name}
      >
      </label>
    </>
  );
};

BarItem.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  id: PropTypes.number,
  activeItem: PropTypes.number,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

BarItem.defaultProps = {
  onChange: () => {},
};

export default BarItem;
