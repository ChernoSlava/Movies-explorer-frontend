import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled, ButtonText } from './styled';

export function Button({ title, link }) {
  return (
    <ButtonStyled type="button">
      <ButtonText href={link}>{title}</ButtonText>
    </ButtonStyled>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
