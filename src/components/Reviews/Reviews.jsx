import { fetchToApiUseFilmIdToSeeReviews } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const params = useParams();

  console.log(params);

  const [moviesCast, setMoviesCast] = useState([]);

  useEffect(() => {
    const array = fetchToApiUseFilmIdToSeeReviews(params.movieId).then(
      data => data
    );

    array.then(data => {
      // console.log(data.results);
      setMoviesCast(data.results);
    });
  }, [params.movieId]);

  return (
    <div>
      REVIEWS
      <ul>
        {moviesCast.map(review => (
          <li key={review.id}>{review.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
