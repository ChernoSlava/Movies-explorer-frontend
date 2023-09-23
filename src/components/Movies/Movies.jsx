import React, { useContext, useEffect, useState } from 'react';
import PropTypes, { objectOf } from 'prop-types';

import { SHORT_DURATION } from '../../constants';
import { moviesApi } from '../../utils';
import { CurrentUserContext } from '../contexts';
import { Footer } from '../Footer';
import { Header } from '../Header';

import { MoviesCardList } from './MoviesCardList';
import { Loader } from './Preloader';
import { SearchForm } from './SearchForm';
import { MoviesStyled } from './styled';

export function Movies({
  loggedIn,
  onSaveFilm,
  onDeleteFilm,
  savedMoviesList,
}) {
  const { email } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesFromSearch, setMoviesFromSearch] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isNothing, setIsNothing] = useState(false);

  function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < SHORT_DURATION);
  }
  function filterMovies(movies, userSearch) {
    function lower(x) {
      return x.toLowerCase().trim();
    }
    return movies.filter(movie => {
      const userMovie = lower(userSearch);
      const movieRu = lower(String(movie.nameRU)).indexOf(userMovie) !== -1;
      const movieEn = lower(String(movie.nameEN)).indexOf(userMovie) !== -1;
      const result = movieRu || movieEn;
      return result;
    });
  }
  function transformMovies(movies) {
    return movies.map(movie => ({
      ...movie,
      image: !movie.image
        ? process.env.REACT_APP_DEFAULT_IMAGE
        : `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: !movie.image
        ? process.env.REACT_APP_DEFAULT_IMAGE
        : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      country: !movie.country ? 'Russia' : movie.country,
      nameEN: !movie.nameEN ? movie.nameRU : movie.nameEN,
      nameRU: !movie.nameRU ? movie.nameEN : movie.nameRU,
    }));
  }

  function handleAnswerMovies(movies, searchData, checkbox) {
    const moviesBlock = filterMovies(movies, searchData);
    if (moviesBlock.length === 0) {
      setIsNothing(true);
    } else {
      setIsNothing(false);
    }

    setMoviesFromSearch(moviesBlock);
    setFilteredMovies(checkbox ? filterShortMovies(moviesBlock) : moviesBlock);
  }

  function handleSearch(value, isShortMovies) {
    localStorage.setItem(`${email} - movieSearch`, value);
    localStorage.setItem(`${email} - shortMovies`, shortMovies);

    const storageMovies = localStorage.getItem(`${email} - movies`);
    if (!storageMovies) {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then(movies => {
          localStorage.setItem(`${email} - movies`, JSON.stringify(movies));
          handleAnswerMovies(transformMovies(movies), value, isShortMovies);
        })
        .catch(() => {
          localStorage.setItem(`${email} - movies`, JSON.stringify([]));
          // console.log(process.env.REACT_APP_ERROR_TEXT);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleAnswerMovies(
        transformMovies(JSON.parse(storageMovies)),
        value,
        isShortMovies,
      );
    }
  }

  const handleShortMovies = () => {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setFilteredMovies(filterShortMovies(moviesFromSearch));
    } else {
      setFilteredMovies(moviesFromSearch);
    }

    localStorage.setItem(`${email} - shortMovies`, !shortMovies);
  };

  useEffect(() => {
    const isShortMovies =
      localStorage.getItem(`${email} - shortMovies`) === 'true';
    setShortMovies(isShortMovies);
  }, [email]);

  useEffect(() => {
    const storageMovies = localStorage.getItem(`${email} - movies`);

    if (storageMovies) {
      const isShortMovies =
        localStorage.getItem(`${email} - shortMovies`) === 'true';
      const value = localStorage.getItem(`${email} - movieSearch`);
      handleAnswerMovies(
        transformMovies(JSON.parse(storageMovies)),
        value,
        isShortMovies,
      );
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Header loggedIn={loggedIn} />
      <MoviesStyled>
        <SearchForm
          onSubmit={value => handleSearch(value, shortMovies)}
          handleShortMovies={handleShortMovies}
          shortMovies={shortMovies}
        />
        <MoviesCardList
          onSaveFilm={onSaveFilm}
          onDeleteFilm={onDeleteFilm}
          savedMoviesList={savedMoviesList}
          moviesForShow={filteredMovies}
          isNothing={isNothing}
        />
      </MoviesStyled>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onSaveFilm: PropTypes.func.isRequired,
  onDeleteFilm: PropTypes.func.isRequired,
  savedMoviesList: PropTypes.arrayOf(objectOf).isRequired,
};
