import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes, { objectOf } from 'prop-types';

import {
  ADD_CARDS,
  FEATURED_CARDS,
  ROUTER_PATH,
  SCREEN_SIZE,
} from '../../../constants';
import { MoviesCard } from '../MoviesCard';

import {
  MoviesCardButton,
  MoviesCardListElement,
  MoviesCardListNothing,
  MoviesCardListStyled,
} from './styled';

export function MoviesCardList({
  onSaveFilm,
  onDeleteFilm,
  savedMoviesList,
  moviesForShow,
  isNothing,
}) {
  const location = useLocation();

  const [currentPage, setNextPage] = useState(0);
  const [sizeScreen, setSizeSreen] = useState({ width: window.innerWidth });
  const [pageSize, setPageSize] = useState(0);

  const isNothingText = isNothing && (
    <MoviesCardListNothing>Ничего не найдено</MoviesCardListNothing>
  );
  const isMoviesLocation = location.pathname === ROUTER_PATH.MOVIES;
  const isMovies =
    isMoviesLocation && moviesForShow.length > currentPage + pageSize;

  function getSavedMovieCard(arr, movie) {
    return arr.find(item => {
      return item.movieId === (movie.id || movie.movieId);
    });
  }
  const takeWidthScreen = () => {
    setSizeSreen({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', takeWidthScreen);

    return () => {
      window.removeEventListener('resize', takeWidthScreen);
    };
  }, [sizeScreen]);

  useEffect(() => {
    const win = sizeScreen.width;
    if (win > SCREEN_SIZE.MIDDLE) {
      setPageSize(FEATURED_CARDS.LARGE);
    } else if (win > SCREEN_SIZE.LITTLE) {
      setPageSize(FEATURED_CARDS.MEDIUM);
    } else {
      setPageSize(FEATURED_CARDS.SMALL);
    }
  }, [sizeScreen.width]);

  return (
    <MoviesCardListStyled>
      {isNothingText}
      <MoviesCardListElement>
        {(isMoviesLocation
          ? moviesForShow.slice(0, pageSize + currentPage)
          : moviesForShow
        ).map(movie => (
          <MoviesCard
            key={movie.id || movie._id}
            onDeleteFilm={onDeleteFilm}
            onSaveFilm={onSaveFilm}
            saved={getSavedMovieCard(savedMoviesList, movie)}
            movie={movie}
          />
        ))}
      </MoviesCardListElement>
      {isMovies ? (
        <MoviesCardButton
          type="button"
          onClick={() => {
            if (sizeScreen.width <= SCREEN_SIZE.MIDDLE) {
              setNextPage(currentPage + ADD_CARDS.MIN);
            } else {
              setNextPage(currentPage + ADD_CARDS.MAX);
            }
          }}>
          Ещё
        </MoviesCardButton>
      ) : null}
    </MoviesCardListStyled>
  );
}
MoviesCardList.propTypes = {
  isNothing: PropTypes.bool.isRequired,
  onSaveFilm: PropTypes.func,
  onDeleteFilm: PropTypes.func.isRequired,
  savedMoviesList: PropTypes.arrayOf(objectOf).isRequired,
  moviesForShow: PropTypes.arrayOf(objectOf).isRequired,
};
MoviesCardList.defaultProps = {
  onSaveFilm: PropTypes.func,
};
