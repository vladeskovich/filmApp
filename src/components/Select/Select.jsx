import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import List from '../List';
import Icon from '../Icon';
import styles from './Select.scss';

const Select = ({
  data,
  value,
  onChange,
  optionLabelProp,
  optionValueProp,
}) => {
  const [visibleList, setVisibleList] = useState(false);

  const openSelectHandler = useCallback(() => {
    setVisibleList(true);
  }, [setVisibleList]);

  const closeSelectHandler = useCallback(() => {
    setVisibleList(false);
  }, [setVisibleList]);

  const clickItemHandler = useCallback((event) => {
    event.stopPropagation();

    const { target: { dataset: { itemIndex } } } = event;
    onChange(optionValueProp ? data[itemIndex][optionValueProp] : data[itemIndex]);
    setVisibleList(false);
  }, [onChange, data, optionValueProp, setVisibleList]);

  const arrowClass = classNames(styles.arrow, { [styles.rotateArrow]: visibleList });

  return (
    <div
      className={styles.navBarGenres}
      onClick={openSelectHandler}
      onMouseLeave={closeSelectHandler}
    >
      <div className={styles.containerGenresItem}>
        <span>{value[optionLabelProp] || value}</span>
      </div>
      <div className={styles.arrowContainer}>
        <Icon
          name='arrow'
          className={arrowClass}
        />
      </div>
      {visibleList && (
        <div className={styles.containerGenresList}
        >
          <List
            data={data}
            direction="vertical"
            itemClassName={styles.containerSortItem}
          >{(item, index) => (
            <div
              onClick={clickItemHandler}
              data-item-index={index}
            >
              {item[optionLabelProp]}
            </div>
          )}
          </List>
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
  optionLabelProp: PropTypes.string,
  optionValueProp: PropTypes.string,
};

Select.defaultProps = {
  optionLabelProp: 'name',
};

export default Select;
