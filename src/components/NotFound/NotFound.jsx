import React from 'react';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.body}>
      <section className={classes.notFound}>
        <div className={classes.img}>
          <img
            src='https://assets.codepen.io/5647096/backToTheHomepage.png'
            alt='Back to the Homepage'
          />
          <img
            src='https://assets.codepen.io/5647096/Delorean.png'
            alt='El Delorean, El Doc y Marti McFly'
          />
        </div>
        <div className={classes.text}>
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <a href='/home' className={classes.yes}>
            YES
          </a>
          <a href='https://www.youtube.com/watch?v=G3AfIvJBcGo' target='_blank'>
            NO
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
