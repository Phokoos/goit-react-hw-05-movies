import { useState } from 'react';
import { fetchToApiUseName } from 'api/api';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchingValue, setSearchingValue] = useState('');

  const [searchingMovies, setSearchingMovies] = useState([]);

  const handleChange = event => {
    event.preventDefault();

    setSearchingValue(event.target.value);
  };

  const searchBtnClick = event => {
    event.preventDefault();
    const array = fetchToApiUseName(searchingValue).then(data => data);

    array.then(data => {
      console.log(data.results);
      setSearchingMovies(data.results);
    });
  };

  const test = movie => {
    // console.log('work' + movie);
    console.log(movie.id);
  };

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
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      {/* {searchingMovies.map(movie => (
        <Link onClick={test(movie)} to={`${movie.id}`} key={movie.id}>
          {movie.title}
        </Link>
      ))} */}
    </div>
  );
};

export default Movies;
