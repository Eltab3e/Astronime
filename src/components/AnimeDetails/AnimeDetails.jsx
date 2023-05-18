import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import classes from './AnimeDetails.module.css';

const AnimeDetails = () => {
  const [details, setDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { animeID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${animeID}`)
      .then((res) => {
        console.log(res.data.data);
        setDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [animeID]);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${animeID}/reviews`)
      .then((res) => {
        console.log(res.data.data);
        setReviews(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [animeID]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navbar />
      </header>

      <div className={classes.main}>
        {details && (
          <div className={classes.sub_main}>
            <div className={classes.parent}>
              <div className={classes.img_wrap}>
                <img
                  src={details?.images?.jpg?.large_image_url}
                  alt=''
                  className={classes.img}
                />
              </div>

              <div className={classes.details_wrap}>
                <div id='anime-details' className={classes.anime_details}>
                  <div className={classes.title_wrap}>
                    <h3 className={classes.title}>
                      {details?.title} ({details?.year || 'Empty year'})
                    </h3>
                    <h4 className={classes.sub_title}>
                      {details?.title_japanese} - {`Rank: ${details?.rank}`}
                    </h4>
                  </div>

                  <div className={classes.svg_wrap}>
                    <div className={classes.sub_svg_wrap}>
                      <div className={classes.sub_details_wrap}>
                        <span className={classes.mini_details}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='20px'
                            color='#9E6F21'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          {details?.rank || 'null'}
                        </span>
                      </div>

                      <div className={classes.sub_details_wrap}>
                        <span className={classes.mini_details}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='20px'
                            color='#FF7A00'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                          </svg>
                          {details?.score || '0'}
                        </span>
                      </div>

                      <div className={classes.sub_details_wrap}>
                        <span className={classes.mini_details}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='20px'
                            color='#D25380'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          {details?.favorites || '0'}
                        </span>
                      </div>

                      <div className={classes.sub_details_wrap}>
                        <span className={classes.mini_details}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='20px'
                            color='#D4ADFC'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
                          </svg>
                          {details?.members || '0'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={classes.genres_wrap}>
                    <h4>Genres: </h4>
                    <div className={classes.sub_genres_wrap}>
                      <div className={classes.mini_genre1}>
                        {details?.genres?.[0]?.name}
                      </div>
                      <div className={classes.mini_genre2}>
                        {details?.genres?.[1]?.name}
                      </div>
                      <div className={classes.mini_genre3}>
                        {details?.genres?.[2]?.name}
                      </div>
                    </div>
                  </div>

                  <div className={classes.info}>
                    <div className={classes.sub_info}>
                      <h4>Status: </h4>
                      <div>
                        <div>{details?.status} //</div>
                      </div>
                    </div>
                    <div className={classes.sub_info}>
                      <h4>Duration: </h4>
                      <div>
                        <div>{details?.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div className={classes.more_info}>
                    <div className={classes.sub_more_info}>
                      <h4>Studio: </h4>
                      <div>
                        <div>{details?.studios?.[0].name}&nbsp;||</div>
                      </div>
                    </div>

                    <div className={classes.sub_more_info}>
                      <h4>Source: </h4>
                      <div>
                        <div>{details?.source}&nbsp;||</div>
                      </div>
                    </div>

                    <div className={classes.sub_more_info}>
                      <h4>Episodes: </h4>
                      <div>
                        <div>{details?.episodes}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='anime-content' className={classes.desc_wrap}>
                  <span className={classes.text}>
                    <h4 className={classes.desc}>Description: </h4>
                    <span className={classes.desc_info}>
                      {truncateString(details?.synopsis, 500) ||
                        "Description's empty"}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {details?.trailer?.embed_url ? (
              <div className={classes.trailer_wrap}>
                <iframe
                  className={classes.trailer}
                  src={details?.trailer?.embed_url}
                  title={details?.title}
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  frameBorder='0'
                ></iframe>
              </div>
            ) : (
              <div className={classes.no_trailer}>
                <h3>No Trailer Available.</h3>
                <p>
                  Wanna go to a fancy 404 page instead? Just for fun? ha? haa?
                  haaa?!
                </p>
                <a href='/404' className={classes.error}>
                  <button className={classes.btn}>Error</button>
                </a>
              </div>
            )}

            <section className={classes.section_reviews}>
              {reviews
                .map((item) => (
                  <div key={item.mal_id} className={classes.reviews}>
                    <div className={classes.user_info}>
                      <div className={classes.user_img_wrap}>
                        <img
                          src={item.user.images.jpg.image_url}
                          className={classes.user_img}
                        />
                      </div>
                      <div>
                        <h6>{item.user.username}</h6>
                      </div>
                    </div>

                    <div className={classes.user_reviews}>
                      <div>
                        <p>{truncateString(item.review, 500)}</p>
                      </div>
                    </div>
                  </div>
                ))
                .slice(0, 5)}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeDetails;
