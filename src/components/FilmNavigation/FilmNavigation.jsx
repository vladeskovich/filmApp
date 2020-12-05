import React, { useCallback, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [value, setValue] = useState('Genres');

  const changeSelectHandler = useCallback((newValue) => {
    const { id } = newValue;

    history.push(`/genre/${id}`);

    setValue(newValue);
  }, [setValue, history]);

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
        />
      </div>
      <div className={styles.orientationItem}>
        <Icon
          data-list-type='grid'
          name='grid'
          className={gridClasses}
          onClick={clickGridHandler}
        />
        <Icon
          data-list-type='list'
          name='list'
          className={listClasses}
          onClick={clickListHandler}
        />
      </div>
    </div>
  );
};

export default FilmNavigation;
