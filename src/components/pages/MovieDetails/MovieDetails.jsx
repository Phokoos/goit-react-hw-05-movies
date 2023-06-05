import { fetchToApiUseFilmId } from 'api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const array = fetchToApiUseFilmId(movieId).then(data => data);

    array.then(data => {
      console.log(data);
      setTrendingMovies(data);
    });
  }, [movieId]);

  return (
    <div>
      MovieDetails
      <h2>{trendingMovies.title}</h2>
    </div>
  );
};

export default MovieDetails;
