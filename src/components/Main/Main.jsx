import React from 'react';
import classes from './Main.module.css';
import Nav from '../Nav/Nav';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaArrowCircleRight } from 'react-icons/fa';

const Main = () => {
  return (
    <div className={classes.wrapper}>
      <Nav />
      <div className={classes.parent}>
        <button className={classes.btn}>
          Sign Up<span aria-hidden>_</span>
          <span aria-hidden className={classes.btn_glitch}>
            Sign Up_
          </span>
        </button>

        <button className={classes.btn}>
          Log In<span aria-hidden>_</span>
          <span aria-hidden className={classes.btn_glitch}>
            Log In_
          </span>
        </button>
      </div>

      <div className={classes.btn_wrapper}>
        <a href='/home' className={classes.main_btn}>
          View Full Site
          <FaArrowCircleRight className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default Main;
