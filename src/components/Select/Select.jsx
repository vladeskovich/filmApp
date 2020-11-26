import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '../List';
import styles from './Select.scss';

const Select = ({
  genres,
  setVisibleList,
  setGenre,
}) => (
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
);

export default Select;
