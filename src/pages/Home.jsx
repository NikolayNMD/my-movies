import { useEffect, useState } from 'react';
import { getTrending, onGetError } from 'services/api';
import { MoviesList } from './MoviesList';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrandingMovies = () => {
      setLoading(true);

      getTrending()
        .then(trendingMovies => {
          setMovies(trendingMovies);
        })
        .catch(onGetError)
        .finally(() => setLoading(false));
    };

    getTrandingMovies();
  }, []);

  return (
    <main>
      <h1 style={{ marginBottom: '20px', fontWeight: 500 }}>Movies in trend</h1>
      <MoviesList movies={movies} />

      {loading && <Loader />}
    </main>
  );
};
