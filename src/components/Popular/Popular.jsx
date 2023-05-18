import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Popular.module.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Video from '../../assets/vid2.mp4';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=24')
      .then((res) => {
        console.log(res.data.data);
        setPopular(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.item1}>
        <Navbar />
      </div>

      <main className={classes.item2}>
        {popular &&
          popular.map((item) => (
            <div
              key={item.mal_id}
              className={classes.pop_parent}
              onClick={() => navigate(`/anime/${item.mal_id}`)}
            >
              <div className={classes.pop_img_wrap}>
                <img
                  src={item.images.jpg.image_url}
                  alt='anime-img'
                  className={classes.pop_img}
                />
              </div>
              <div className={classes.pop_text_wrap}>
                <h4>{truncateString(item.title, 15)}</h4>
                <h5 className={classes.fav}>
                  Favorites: {item.favorites}&nbsp;
                </h5>
                <h5>{item.episodes} episodes</h5>
                <h6>Rank: {item.popularity}</h6>
                <h6>{item.year}</h6>
              </div>
            </div>
          ))}
      </main>

      <section className={classes.bg}>
        <div className={classes.overlay}></div>
        <video autoPlay muted loop className={classes.vid}>
          <source src={Video} type='video/mp4' />
        </video>
      </section>
    </div>
  );
};

export default Popular;
