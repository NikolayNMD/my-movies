import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails, onGetError } from 'services/api';
import { AddListStyle, CardStyle, StyledLink, WrapStyle } from './Pages.styled';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation;
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getDetails = () => {
      setLoading(true);

      getMovieDetails(movieId)
        .then(details => {
          setMovie(details);
        })
        .catch(onGetError)
        .finally(() => {
          setLoading(false);
        });
    };
    getDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    poster_path,
    title,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
  } = movie;

  return (
    <>
      <StyledLink to={backLink.current}>{'<=== BACK'}</StyledLink>
      <h2>Movie Details:</h2>
      {loading && <Loader />}
      {movie && (
        <>
          <WrapStyle>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w342${poster_path}`
                  : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
              }
              alt={title}
              width="300px"
            />
            <CardStyle>
              <h1>
                {original_title} ({release_date.slice(0, 4)})
              </h1>
              <h3>Genres</h3>
              <p> {genres.map(({ name }) => `${name.toLowerCase()} | `)}</p>
              <h3>
                Ranking: <span>{vote_average}</span>
              </h3>
              <h3>Overview</h3>
              <p>{overview}</p>
            </CardStyle>
          </WrapStyle>
          <h3>Additional information:</h3>
          <AddListStyle>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </AddListStyle>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
