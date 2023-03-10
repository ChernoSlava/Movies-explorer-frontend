import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';

import { useForm } from '../../../hooks';
import { CurrentUserContext } from '../../contexts';
import { ROUTER_PATH } from '../../../constants';
import { useState } from 'react';

export function SearchForm({
  onSubmit,
  handleShortMovies,
  shortMovies
}) {

  const location = useLocation();
  const user = useContext(CurrentUserContext);

  const { values, handleChange, isEmptiness, setIsEmptiness } = useForm({});
  const [emptySearch, setEmptySearch] = useState('');

  const textError = 'Нужно ввести ключевое слово.';

  const savedMoviesLocation = location.pathname === ROUTER_PATH.SAVED_MOVIES;
  const spanContainer = !savedMoviesLocation && emptySearch;

  function handleSubmit(evt) {
    evt.preventDefault();
    isEmptiness ? onSubmit(values.film) : setEmptySearch(textError);
  }

  useEffect(() => {
    if (location.pathname === ROUTER_PATH.MOVIES && localStorage.getItem(`${user.email} - movieSearch`)) {
      const searchValue = localStorage.getItem(`${user.email} - movieSearch`);
      values.film = searchValue;
      setIsEmptiness(true);
    }
  }, [user]);

  useEffect(() => {
    setEmptySearch('')
  }, [isEmptiness]);

  return (
    <div className="search-form">
      <form className='search-form__form' onSubmit={handleSubmit} noValidate>
        <fieldset className='search-form__field'>
          <span className={`search-form__field-error`}>{spanContainer}</span>
          <input
            type="text"
            placeholder="Фильм"
            name="film"
            minLength={1}
            className="search-form__input"
            id='film'
            required
            onChange={handleChange}
            value={values.film || ''}
          />
          <button
            type="submit"
            aria-label="Найти"
            className="search-form__button"
          />
        </fieldset>
        <div className='search-form__checkbox-container'>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={handleShortMovies}
            checked={shortMovies ? true : false}
            className='search-form__checkbox'
          />
          <label className="search-form__checkbox-label" htmlFor="checkbox" />
          <p className="search-form__text">Короткометражки</p>
        </div>
      </form>
    </div>
  );
};
