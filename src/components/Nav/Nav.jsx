import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a href='/'>Home</a>
        </li>
        <li className={classes.item}>
          <a href='/'>Most Popular</a>
        </li>
        <li className={classes.item}>
          <a href='/'>Anime Recommendations</a>
        </li>
        <li className={classes.item}>
          <a href='/'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
