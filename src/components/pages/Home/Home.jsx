import { fetchToApiTrending } from 'api/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const array = fetchToApiTrending().then(data => data);

    array.then(data => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <div className={css.home}>
      <h1 className={css.home_title}>Trending movies</h1>
      <ul className={css.home_list}>
        {trendingMovies.map(movie => (
          <li className={css.home_item} key={movie.id}>
            <Link state={location} to={`movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
