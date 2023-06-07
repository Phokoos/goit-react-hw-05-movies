import { fetchToApiUseFilmId } from 'api/api';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location?.state ?? '/movies');

  const { movieId } = useParams();

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const array = fetchToApiUseFilmId(movieId).then(data => data);

    array.then(data => {
      setTrendingMovies(data);
    });
  }, [movieId]);

  return (
    <div className={css.movie}>
      <h2 className={css.movie_main_title}>Movie Details</h2>
      <Link
        style={{
          all: 'unset',
          fontSize: '18px',
          width: '70px',
          padding: '10px',
          border: '1px solid black',
          display: 'block',
          margin: '10px',
          borderRadius: '5px',
          pointerEvents: 'default',
        }}
        to={backLinkRef.current}
      >
        Go back
      </Link>
      <div className={css.movie_card}>
        {trendingMovies.poster_path && (
          <img
            className={css.movie_img}
            src={`https://image.tmdb.org/t/p/w500${trendingMovies.poster_path}`}
            alt={trendingMovies.title}
          />
        )}
        <div>
          <h3 className={css.movie_title}>{trendingMovies.title}</h3>
          <p className={css.movie_text}>
            User Score: {((trendingMovies.vote_average / 10) * 100).toFixed()}%
          </p>
          <p className={css.movie_subtitle}>Overview</p>
          <p className={css.movie_text}>{trendingMovies.overview}</p>
          <p className={css.movie_subtitle}>Genres</p>
          <ul className={css.movie_genres}>
            {trendingMovies.genres &&
              trendingMovies.genres.map(({ name, id }) => (
                <li className={css.movie_genres_item} key={id}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h4 className={css.movie_additional_title}>Additional information</h4>
        <ul className={css.movie_additional_list}>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
