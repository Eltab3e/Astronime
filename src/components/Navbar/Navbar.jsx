import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={classes.navbar}>
      <a className={classes.logo_wrap} href='/'>
        <img src={Logo} alt='logo' className={classes.logo_img} />
      </a>

      <button
        className={classes.menu_icon}
        onClick={handleShowNavbar}
        aria-label='menu'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 25 25'
          strokeWidth={1.5}
          stroke='currentColor'
          width='25px'
          height='25px'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
          />
        </svg>
      </button>

      <nav
        className={[classes.navigation, showNavbar && classes.active].join(' ')}
      >
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink
              to='/home'
              className={({ isActive }) =>
                isActive ? classes.active : classes.nav_link
              }
            >
              <span className={classes.space}>01.</span>
              Home
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to='/most-popular'
              className={({ isActive }) =>
                isActive ? classes.active : classes.nav_link
              }
            >
              <span className={classes.space}>02.</span>
              Popular
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to='/search'
              className={({ isActive }) =>
                isActive ? classes.active : classes.nav_link
              }
            >
              <span className={classes.space}>03.</span>
              Search
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? classes.active : classes.nav_link
              }
            >
              <span className={classes.space}>04.</span>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
