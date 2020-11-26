import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import List from '../List';
import Icon from '../Icon';
import styles from './Select.scss';

const Select = ({
  genres,
}) => {
  const [activeGenre, setGenre] = useState('Genre');
  const [visibleList, setVisibleList] = useState(false);
  return (
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
  );
};

export default Select;
