import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTER_PATH } from '../../../constants';
import { useForm } from '../../../hooks';
import { CurrentUserContext } from '../../contexts';

import {
  SearchFormButton,
  SearchFormCheckbox,
  SearchFormCheckboxContainer,
  SearchFormCheckboxLabel,
  SearchFormFieldError,
  SearchFormFieldset,
  SearchFormInput,
  SearchFormMain,
  SearchFormStyled,
  SearchFormText,
} from './styled';

export function SearchForm({ onSubmit, handleShortMovies, shortMovies }) {
  const location = useLocation();
  const { email } = useContext(CurrentUserContext);

  const { values, handleChange, isEmptiness, setIsEmptiness } = useForm({});
  const [emptySearch, setEmptySearch] = useState('');

  const textError = 'Нужно ввести ключевое слово.';

  const savedMoviesLocation = location.pathname === ROUTER_PATH.SAVED_MOVIES;
  const spanContainer = !savedMoviesLocation && emptySearch;
  const checkbox = 'box';

  const handleSubmit = evt => {
    evt.preventDefault();
    if (isEmptiness) {
      onSubmit(values.film);
    } else {
      setEmptySearch(textError);
    }
  };

  useEffect(() => {
    if (
      location.pathname === ROUTER_PATH.MOVIES &&
      localStorage.getItem(`${email} - movieSearch`)
    ) {
      const searchValue = localStorage.getItem(`${email} - movieSearch`);
      values.film = searchValue;
      setIsEmptiness(true);
    }
  }, [email]);

  useEffect(() => {
    setEmptySearch('');
  }, [isEmptiness]);

  return (
    <SearchFormStyled>
      <SearchFormMain onSubmit={handleSubmit} noValidate>
        <SearchFormFieldset>
          <SearchFormFieldError>{spanContainer}</SearchFormFieldError>
          <SearchFormInput
            type="text"
            placeholder="Фильм"
            name="film"
            minLength={1}
            id="film"
            required
            onChange={handleChange}
            value={values.film || ''}
          />
          <SearchFormButton type="submit" aria-label="Найти" />
        </SearchFormFieldset>
        <SearchFormCheckboxContainer>
          <SearchFormCheckboxLabel htmlFor={checkbox} checked={!!shortMovies}>
            <SearchFormCheckbox
              type="checkbox"
              name="checkbox"
              id={checkbox}
              onChange={handleShortMovies}
              checked={!!shortMovies}
            />
          </SearchFormCheckboxLabel>
          <SearchFormText>Короткометражки</SearchFormText>
        </SearchFormCheckboxContainer>
      </SearchFormMain>
    </SearchFormStyled>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleShortMovies: PropTypes.func.isRequired,
  shortMovies: PropTypes.bool.isRequired,
};
