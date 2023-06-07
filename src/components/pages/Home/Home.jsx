import { fetchToApiTrending } from 'api/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const array = fetchToApiTrending().then(data => data);

    array.then(data => {
      console.log(data.results);
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
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