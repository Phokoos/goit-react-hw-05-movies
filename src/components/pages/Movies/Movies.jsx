import { useEffect, useState } from 'react';
import { fetchToApiUseName } from 'api/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [searchingValue, setSearchingValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const handleChange = event => {
    event.preventDefault();

    setSearchingValue(event.target.value);
  };

  const searchBtnClick = event => {
    event.preventDefault();

    setSearchParams({
      search: `${searchingValue}`,
    });
  };

  useEffect(() => {
    if (searchParams.get('search')) {
      const array = fetchToApiUseName(searchParams.get('search')).then(
        data => data
      );

      array.then(data => {
        setSearchingMovies(data.results);
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get('search')) {
      setSearchingValue(searchParams.get('search'));
    }
  }, [searchParams]);

  return (
    <div>
      <form action="submit" onSubmit={searchBtnClick}>
        <label>
          <input
            onChange={handleChange}
            value={searchingValue}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
