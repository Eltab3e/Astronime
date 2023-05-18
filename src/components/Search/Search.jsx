import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import classes from './Search.module.css';

const Search = () => {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState('');
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}&limit=5`)
      .then((res) => {
        console.log(res.data.data);
        setAnime(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh

    // access input values here
    console.log(inputRef.current.value);

    setSearch(inputRef.current.value);

    // clear all input values in the form
    event.target.reset();
  };

  const handleClick = () => {
    setSearch(inputRef.current.value);
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.item1}>
        <Navbar />
      </section>

      <section className={classes.item2}></section>

      <section className={classes.item3}>
        <div className={classes.container}>
          <h2>Search your favorite anime.</h2>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.group}>
              <input
                type='search'
                className={classes.input}
                ref={inputRef}
                required
              />
              <span className={classes.bar}></span>
              <label className={classes.label}>Type here ...</label>
            </div>
            <div>
              <BsFillArrowRightCircleFill
                className={classes.icon}
                onClick={handleClick}
              />
            </div>
          </form>
        </div>
      </section>

      <section className={classes.item4}>
        <div className={classes.parent}>
          <div className={classes.menu}>
            {search ? (
              anime.map((item) => (
                <div
                  key={item.mal_id}
                  className={classes.card}
                  onClick={() => navigate(`/anime/${item.mal_id}`)}
                >
                  <div className={classes.img_wrap}>
                    <img
                      src={item.images.jpg.image_url}
                      className={classes.api_img}
                      alt='card-img'
                    />
                  </div>
                  <div className={classes.text_wrap}>
                    <h4>{truncateString(item.title, 18)}</h4>
                    <p>{item.episodes} episodes</p>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
