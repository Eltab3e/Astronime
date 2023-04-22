import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a href='/home' className={classes.link}>Home</a>
        </li>
        <li className={classes.item}>
          <a href='/most-popular' className={classes.link}>Most Popular</a>
        </li>
        <li className={classes.item}>
          <a href='/anime-recommendations' className={classes.link}>Anime Recommendations</a>
        </li>
        <li className={classes.item}>
          <a href='/about' className={classes.link}>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
