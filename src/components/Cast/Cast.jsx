import { fetchToApiUseFilmIdToSeeCredits } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const params = useParams();

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
      <h4 className={css.cast_title}>Cast:</h4>
      <ul className={css.cast_list}>
        {moviesCast.map(actor => (
          <li className={css.cast_item} key={actor.id}>
            <img
              className={css.cast_img}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <div>
              <p className={css.cast_desc_actor}>{actor.name}</p>
              <div>
                <p>Role: </p>
                <p>{actor.character}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

// https://image.tmdb.org/t/p/w500
