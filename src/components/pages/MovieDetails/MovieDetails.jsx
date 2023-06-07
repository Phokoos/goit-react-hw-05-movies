import { fetchToApiUseFilmId } from 'api/api';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

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
    <div>
      MovieDetails
      <Link to={backLinkRef.current}>Go back</Link>
      <h2>{trendingMovies.title}</h2>
      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
