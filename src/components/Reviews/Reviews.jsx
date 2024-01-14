import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews, onGetError } from 'services/api';
import { LiReviewStyle, UlReviewStyle } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchReviewsFilms = () => {
      setLoading(true);

      getReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(onGetError)
        .finally(() => {
          setLoading(false);
        });
    };

    fetchReviewsFilms();
  }, [movieId]);

  return (
    <>
      <h3 style={{ marginTop: '20px' }}>Reviews:</h3>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <UlReviewStyle>
          {reviews.map(({ id, author, content }) => (
            <LiReviewStyle key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </LiReviewStyle>
          ))}
        </UlReviewStyle>
      ) : (
        <p>Sorry! We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
