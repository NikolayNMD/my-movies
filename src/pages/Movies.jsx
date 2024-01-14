import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';
import { getSearchByKeyword, onGetError } from 'services/api';
import { MoviesList } from './MoviesList';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = queryMovie => {
    setLoading(true);

    getSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(onGetError)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <SearchForm searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <MoviesList movies={searchFilms} />}
    </main>
  );
};
