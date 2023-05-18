import React from 'react';
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
};

export default Loading;
