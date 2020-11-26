import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const arrowClass = classNames(styles.arrow, { [styles.rotateArrow]: visibleList });
  const openSelectHandler = useCallback(() => {
    setVisibleList(true);
  }, [setVisibleList]);

  const closeSelectHandler = useCallback(() => {
    setVisibleList(false);
  }, [setVisibleList]);

  const clickItemHandler = useCallback((event) => {
    event.stopPropagation();

    const { target: { dataset: { itemIndex } } } = event;
    onChange(optionValueProp ? data[itemIndex][optionLabelProp] : data[itemIndex]);

    history.push(`/genre/${data[itemIndex][optionValueProp]}`);
    setVisibleList(false);
  }, [onChange, data, optionValueProp, setVisibleList]);

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
  optionLabelProp: PropTypes.string,
  optionValueProp: PropTypes.string,
};

Select.defaultProps = {
  optionLabelProp: 'name',
  optionValueProp: 'id',
};

export default Select;
