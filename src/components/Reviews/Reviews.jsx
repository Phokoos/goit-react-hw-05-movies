import { fetchToApiUseFilmIdToSeeReviews } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const params = useParams();

  const [moviesCast, setMoviesCast] = useState([]);

  useEffect(() => {
    const array = fetchToApiUseFilmIdToSeeReviews(params.movieId).then(
      data => data
    );

    array.then(data => {
      setMoviesCast(data.results);
    });
  }, [params.movieId]);

  return (
    <div>
      <h4 className={css.reviews_title}>Reviews: </h4>
      {moviesCast.length ? (
        <ul className={css.reviews_list}>
          {moviesCast.map(review => (
            <li key={review.id}>
              <p className={css.reviews_author}>Author: {review.author}</p>
              <p className={css.reviews_feedback}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.reviews_error}>
          We don`t have any reviews for this movie!
        </div>
      )}
    </div>
  );
};

export default Reviews;
