import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import Navbar from '../Navbar/Navbar';

const HomeMain = () => {
  const [topAiring, setTopAiring] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setpopular] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/top/anime?filter=airing&limit=5')
      .then((res) => {
        console.log(res.data.data);
        setTopAiring(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=5')
      .then((res) => {
        console.log(res.data.data);
        setUpcoming(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=10')
      .then((res) => {
        console.log(res.data.data);
        setpopular(res.data.data);
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
      <section className={classes.item1}>
        <Navbar />
      </section>

      <section className={classes.item2}>
        <div className={classes.col}>
          <div className={classes.heading}>
            <h2>Top Airing</h2>
          </div>
          <ul className={classes.list}>
            {topAiring &&
              topAiring.map((item) => (
                <li
                  key={item.mal_id}
                  className={classes.card}
                  onClick={() => navigate(`/anime/${item.mal_id}`)}
                >
                  <div className={classes.img_wrap}>
                    <img
                      src={item.images.jpg.image_url}
                      className={classes.img}
                      alt='card-img'
                    />
                  </div>
                  <div className={classes.text_wrap}>
                    <div>
                      <h4>{truncateString(item.title, 45)}</h4>
                    </div>
                    <div className={classes.details}>
                      {item?.episodes ? (
                        <p>{item?.episodes} Eps</p>
                      ) : (
                        <p>?? Eps</p>
                      )}
                      <p>{item?.type}</p>
                      <p>{item?.year}</p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className={classes.col}>
          <div className={classes.heading}>
            <h2>Upcoming</h2>
          </div>
          <ul className={classes.list}>
            {upcoming &&
              upcoming.map((item) => (
                <li
                  key={item.mal_id}
                  className={classes.card}
                  onClick={() => navigate(`/anime/${item.mal_id}`)}
                >
                  <div className={classes.img_wrap}>
                    <img
                      src={item.images.jpg.image_url}
                      className={classes.img}
                      alt='item-img'
                    />
                  </div>
                  <div className={classes.text_wrap}>
                    <div>
                      <h4>{truncateString(item.title, 45)}</h4>
                    </div>
                    <div className={classes.details}>
                      <p>{item?.type}</p>
                      <p>{item?.season || 'Unknown'}</p>
                      <p>{item?.year}</p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* <div className={classes.footer}>
          <p className={classes.copy}>
            &copy; 2023 by Ahmed Eltabie. <br />
            This website is powered by{' '}
            <a
              href='https://docs.api.jikan.moe/'
              target='_blank'
              className={classes.jikan}
            >
              JIKAN.
            </a>
          </p>
        </div> */}
      </section>

      <section className={classes.item3}>
        <div className={classes.most_heading}>
          <h2>Most Popular</h2>
        </div>

        <div className={classes.most_list}>
          {popular &&
            popular.map((item) => (
              <div
                key={item.mal_id}
                className={classes.most_card}
                onClick={() => navigate(`/anime/${item.mal_id}`)}
              >
                <div className={classes.most_img_wrap}>
                  <img
                    src={item.images.jpg.large_image_url}
                    className={classes.most_img}
                    alt='list-img'
                  />
                  <div className={classes.hidden}>
                    <div className={classes.most_details}>
                      <div>{item?.episodes} Episodes</div>

                      <div className={classes.genres}>
                        <div>{item?.genres?.[0]?.name}</div>
                        <div>{item?.genres?.[1]?.name || '~'}</div>
                        <div>{item?.genres?.[2]?.name || '~'}</div>
                      </div>

                      <div>Type: {item?.type}</div>
                      <div>Year: {item?.year}</div>
                    </div>
                  </div>
                </div>
                <div className={classes.most_text_wrap}>
                  <h4>{truncateString(item.title, 25)}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomeMain;
