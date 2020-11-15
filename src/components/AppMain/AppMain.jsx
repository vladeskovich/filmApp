import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '../List';
import SECTIONS from '../../constants/filmSections';
import styles from './AppMain.scss';

const AppMain = () => (
  <div className={styles.appMain}>
    <div className={styles.appMainContent}>
      <div className={styles.navBarWrapper}>
        <div className={styles.navBar}>
          <List
            data={SECTIONS}
            direction="horizontal"
            className={styles.navBarSort}
            itemClassName={styles.containerButtonFilter}
          >{(section) => (
              <NavLink to={section.apiText}>{section.nameSection}</NavLink>
          )}
          </List>
          <div className={styles.navBarGenres}>

          </div>
        </div>
        <div className={styles.orientationItem}>

        </div>
      </div>
    </div>
  </div>
);

export default AppMain;
