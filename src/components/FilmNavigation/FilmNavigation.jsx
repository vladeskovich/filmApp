import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import List from '../List';
import SECTIONS from '../../constants/filmSections';
import Icon from '../Icon';
import Select from '../Select';
import styles from './FilmNavigation.scss';

const FilmNavigation = ({
  genres,
  displayType,
  changeDisplayType,
}) => {
  const [value, setValue] = useState('Genre');

  const changeSelectHandler = useCallback((newValue) => {
    setValue(newValue);
  }, [setValue]);

  const clickGridHandler = useCallback(() => {
    changeDisplayType('grid');
  }, [changeDisplayType]);

  const clickListHandler = useCallback(() => {
    changeDisplayType('list');
  }, [changeDisplayType]);

  const gridClasses = classNames(styles.grid, { [styles.activeGrid]: displayType === 'grid' });
  const listClasses = classNames(styles.list, { [styles.activeList]: displayType === 'list' });

  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.navBar}>
        <List
          data={SECTIONS}
          direction="horizontal"
          className={styles.navBarSort}
          itemClassName={styles.containerSortItem}
        >{(section) => (
          <NavLink
            to={section.apiText}
            activeClassName={styles.active}
          >
            {section.nameSection}
          </NavLink>
        )}
        </List>
        <Select
          data={genres}
          value={value}
          onChange={changeSelectHandler}
          keyField='id'
        />
      </div>
      <div className={styles.orientationItem}>
        <Icon
          name='grid'
          className={gridClasses}
          onClick={clickGridHandler}
        />
        <Icon
          name='list'
          className={listClasses}
          onClick={clickListHandler}
        />
      </div>
    </div>
  );
};

export default FilmNavigation;
