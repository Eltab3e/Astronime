import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import classes from './About.module.css';
import Video from '../../assets/vid.mp4';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <section className={classes.about_section}>
        <article className={classes.article}>
          <div className={classes.about}>
            <h1>About Us</h1>
            <hr className={classes.hr1} />
            <p>
              Welcome to Astronime, your ultimate source for anime. Our website
              is dedicated to bringing you the latest news, reviews, and
              insights into the world of anime. Whether you're a long-time fan
              or just starting out, this is the perfect place to discover and
              explore the vast world of anime.
            </p>
          </div>

          <hr className={classes.hr2} />

          <div className={classes.footer}>
            <p className={classes.copy}>
              &copy; 2023 by Ahmed Eltabie. <br />
              This website is powered by{' '}
              <a
                href='https://jikan.moe/'
                target='_blank'
                className={classes.jikan}
              >
                JIKAN.
              </a>
            </p>
          </div>

          <hr className={classes.hr3} />

          <div className={classes.back_section}>
            <div className={classes.icon_wrap}>
              <BsFillArrowLeftCircleFill
                className={classes.icon}
                onClick={() => navigate('/home')}
              />
            </div>
            <div>
              <p className={classes.back_text}>Back to home</p>
            </div>
          </div>
        </article>
      </section>

      <section className={classes.bg}>
        <div className={classes.overlay}></div>
        <video autoPlay muted loop className={classes.vid}>
          <source src={Video} type='video/mp4' />
        </video>
      </section>
    </div>
  );
};

export default About;
