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
  const gridClass = classNames(styles.grid, { [styles.activeGrid]: displayType === 'grid' });
  const listClass = classNames(styles.list, { [styles.activeList]: displayType === 'list' });

  const [value, setValue] = useState('Genre');

  const changeSelectHandler = useCallback((newValue) => {
    setValue(newValue);
  });

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
        />
      </div>
      <div className={styles.orientationItem}>
        <Icon
          name='grid'
          className={gridClass}
          onClick={() => changeDisplayType('grid')}
        />
        <Icon
          name='list'
          className={listClass}
          onClick={() => changeDisplayType('list')}
        />
      </div>
    </div>
  );
};

export default FilmNavigation;
