import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useSound from 'use-sound';

import { ROUTER_PATH } from '../../constants';
import { useForm } from '../../hooks';
import sauron from '../../sound/sauron.mp3';
import { Logo } from '../Logo';

import {
  LoginButtonContainer,
  LoginCheckbox,
  LoginField,
  LoginFieldError,
  LoginFieldset,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginLabelForCheckbox,
  LoginLink,
  LoginLinkText,
  LoginLogo,
  LoginStyled,
  LoginSubmitButton,
  LoginTitle,
} from './styled';

export function Login({ onAuthorization, loggedIn, isInquiry }) {
  const navigation = useNavigate();

  const { values, handleChange, resetForm, errors } = useForm({});
  const [checkboxActive, setCheckboxActive] = useState(false);

  const [playShowPassword] = useSound(sauron, { volume: 0.25 });

  const handleSubmit = evt => {
    evt.preventDefault();
    onAuthorization(values);
  };

  const handleShowPassword = () => {
    setCheckboxActive(!checkboxActive);
    if (!checkboxActive) {
      playShowPassword();
    }
  };

  useEffect(() => {
    resetForm();
  }, [resetForm, isInquiry]);

  const isErrors = errors.email || errors.password;
  const isEmptyValues = !values.password || !values.email;
  const isDisabled = isErrors || isEmptyValues || isInquiry;

  return loggedIn ? (
    navigation(ROUTER_PATH.MAIN)
  ) : (
    <LoginStyled>
      <LoginForm onSubmit={handleSubmit} noValidate>
        <LoginLogo>
          <Logo />
        </LoginLogo>
        <LoginTitle>Скорее на борт!</LoginTitle>
        <LoginFieldset>
          <LoginLabel htmlFor="email">
            <LoginFieldError isError={errors.email}>
              {errors.email}
            </LoginFieldError>
            <LoginField>Космо почта</LoginField>
            <LoginInput
              onChange={handleChange}
              isError={errors.email}
              isDisa={isInquiry}
              name="email"
              placeholder="star@mail.ru"
              type="email"
              required
              value={values.email || ''}
              disabled={isInquiry}
              autoComplete="email"
            />
          </LoginLabel>
          <LoginLabel htmlFor="password">
            <LoginFieldError isError={errors.password}>
              {errors.password}
            </LoginFieldError>
            <LoginField>Космо пароль</LoginField>
            <LoginInput
              onChange={handleChange}
              isError={errors.password}
              isDisa={isInquiry}
              name="password"
              placeholder="Пароль"
              minLength={6}
              type={checkboxActive ? 'text' : 'password'}
              required
              value={values.password || ''}
              disabled={isInquiry}
              autoComplete="current-password"
            />
            <LoginCheckbox
              type="checkbox"
              name="checkbox-log"
              id="checkbox-log"
              onChange={() => handleShowPassword()}
              checked={checkboxActive}
            />
            <LoginLabelForCheckbox
              active={checkboxActive}
              htmlFor="checkbox-log"
            />
          </LoginLabel>
        </LoginFieldset>
        <LoginButtonContainer>
          <LoginSubmitButton
            type="submit"
            isBlock={isDisabled}
            disabled={isDisabled}>
            Отправляемся
          </LoginSubmitButton>
          <LoginLinkText>
            Ещё не зарегистрированы?
            <LoginLink to={ROUTER_PATH.REGISTER}>Регистрация</LoginLink>
          </LoginLinkText>
        </LoginButtonContainer>
      </LoginForm>
    </LoginStyled>
  );
}

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isInquiry: PropTypes.bool.isRequired,
  onAuthorization: PropTypes.func.isRequired,
};
