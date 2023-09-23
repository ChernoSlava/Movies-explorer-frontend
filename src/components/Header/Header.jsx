import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

import { HeaderStyled } from './styled';

export function Header({ loggedIn }) {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation loggedIn={loggedIn} />
    </HeaderStyled>
  );
}
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
