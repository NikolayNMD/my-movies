import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors, onGetError } from 'services/api';
import { LiCast, UlCast } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getCast = () => {
      setLoading(true);

      getActors(movieId)
        .then(actors => {
          setCast(actors);
        })
        .catch(onGetError)
        .finally(() => {
          setLoading(false);
        });
    };

    getCast();
  }, [movieId]);

  return (
    <>
      <h3 style={{ marginTop: '20px' }}>Cast:</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <UlCast>
          {cast.map(({ id, name, character, profile_path }) => (
            <LiCast key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
                }
                alt={name}
                width="100"
                height="150"
              />
            </LiCast>
          ))}
        </UlCast>
      ) : (
        <p>Sorry! We don't have any information about cast</p>
      )}
    </>
  );
};
