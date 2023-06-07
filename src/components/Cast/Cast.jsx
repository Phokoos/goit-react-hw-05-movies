import { fetchToApiUseFilmIdToSeeCredits } from 'api/api';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();

  console.log(params);

  const [moviesCast, setMoviesCast] = useState([]);

  useEffect(() => {
    const array = fetchToApiUseFilmIdToSeeCredits(params.movieId).then(
      data => data
    );

    array.then(data => {
      setMoviesCast(data.cast);
    });
  }, [params.movieId]);

  return (
    <div>
      CAST
      <ul>
        {moviesCast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
