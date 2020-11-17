import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import List from '../List';
import SECTIONS from '../../constants/filmSections';
import Icon from '../Icon';
import styles from './FilmNavigation.scss';

const FilmNavigation = ({
  genres,
}) => {
  const [activeGenre, setGenre] = useState('Genre');
  const [visibleList, setVisibleList] = useState(false);
  debugger;
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
            <div className={styles.containerGenresList}
                 onMouseLeave={() => {
                   setVisibleList(false);
                 }
                 }>
              <List
                data={genres}
                direction="vertical"
                className={styles.genresList}
                itemClassName={styles.containerSortItem}
              >{(genre) => (
                <NavLink
                  onClick={() => setGenre(genre.name)}
                  to={genre.name}
                >
                  {genre.name}
                </NavLink>
              )}
              </List>
            </div>
          )}
        </div>
      </div>
      <div className={styles.orientationItem}>
        <Icon
          name='square'
          className={classNames(styles.square, { [styles.rotateArrow]: visibleList })
          }
        />
        <Icon
          name='rectangle'
          className={classNames(styles.rectangle, { [styles.rotateArrow]: visibleList })
          }
        />
      </div>
    </div>
  );
};

export default FilmNavigation;
