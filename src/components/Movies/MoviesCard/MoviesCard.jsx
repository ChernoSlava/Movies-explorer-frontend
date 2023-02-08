import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTER_PATH } from '../../../constants';

import {
  MoviesCardButton,
  MoviesCardInfo,
  MoviesCardPoster,
  MoviesCardStyled,
  MoviesCardTextContainer,
  MoviesCardTime,
  MoviesCardTitle,
  MoviesCardTrailer,
} from './styled';

export function MoviesCard({ movie, saved, onSaveFilm, onDeleteFilm }) {
  const location = useLocation();

  const handleLike = () => {
    onSaveFilm(movie);
  };

  const handleDelete = () => {
    onDeleteFilm(movie);
  };

  function transformDuration(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return `${minutes}м`;
    }
    return `${hours}ч ${minutes}м`;
  }

  return (
    <MoviesCardStyled>
      <MoviesCardTrailer
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer">
        <MoviesCardPoster alt={movie.nameRU} src={movie.image} />
      </MoviesCardTrailer>
      <MoviesCardInfo>
        <MoviesCardTextContainer>
          <MoviesCardTitle>{movie.nameRU}</MoviesCardTitle>
          <MoviesCardTime>{transformDuration(movie.duration)}</MoviesCardTime>
        </MoviesCardTextContainer>
        {location.pathname === ROUTER_PATH.MOVIES && (
          <MoviesCardButton
            type="button"
            aria-label="like"
            onClick={saved ? handleDelete : handleLike}
            save={saved}
          />
        )}
        {location.pathname === ROUTER_PATH.SAVED_MOVIES && (
          <MoviesCardButton
            type="button"
            aria-label="dislike"
            onClick={handleDelete}
            delet
          />
        )}
      </MoviesCardInfo>
    </MoviesCardStyled>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.object.isRequired,
  saved: PropTypes.object,
  onSaveFilm: PropTypes.func,
  onDeleteFilm: PropTypes.func.isRequired,
};
MoviesCard.defaultProps = {
  onSaveFilm: () => {},
  saved: undefined,
};
// saved: PropTypes.objectOf(
//   shape({
//     country: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     director: PropTypes.string.isRequired,
//     duration: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//     movieId: PropTypes.number.isRequired,
//     nameEN: PropTypes.string.isRequired,
//     nameRU: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
//     thumbnail: PropTypes.string.isRequired,
//     trailerLink: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired,
//     __v: PropTypes.number.isRequired,
//     _id: PropTypes.string.isRequired,
//   }),
// )
