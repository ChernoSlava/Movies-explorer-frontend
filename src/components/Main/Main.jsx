import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from '../Footer';
import { Header } from '../Header';

import { AboutMe } from './AboutMe';
import { AboutProject } from './AboutProject';
import { Portfolio } from './Portfolio';
import { Promo } from './Promo';
import { MainStyled } from './styled';
import { Techs } from './Techs';

export function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <MainStyled>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </MainStyled>
      <Footer />
    </>
  );
}

Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
