import React, { useState } from 'react';
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
  const [activeGenre, setGenre] = useState('Genre');
  const [visibleList, setVisibleList] = useState(false);
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
        <div
          className={styles.navBarGenres}
          onClick={() => setVisibleList(true)}
        >
          <div className={styles.containerGenresItem}>
            <span>{activeGenre}</span>
          </div>
          <div className={styles.arrowContainer}>
            <Icon
              name='arrow'
              className={classNames(styles.arrow, { [styles.rotateArrow]: visibleList })
              }
            />
          </div>
          {visibleList && (
            <Select
            genres={genres}
            setVisibleList={setVisibleList}
            setGenre={setGenre}
            />
          )}
        </div>
      </div>
      <div className={styles.orientationItem}>
        <Icon
          name='grid'
          className={classNames(styles.grid, { [styles.activeGrid]: displayType === 'grid' })}
          onClick={() => changeDisplayType('grid')}
        />
        <Icon
          name='list'
          className={classNames(styles.list, { [styles.activeList]: displayType === 'list' })}
          onClick={() => changeDisplayType('list')}
        />
      </div>
    </div>
  );
};

export default FilmNavigation;
