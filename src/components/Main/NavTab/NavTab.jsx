import React from 'react';

import { Button } from '../Button';

import { NavTabStyled } from './styled';

export function NavTab() {
  return (
    <NavTabStyled>
      <Button title="О проекте" link="#about-project" />
      <Button title="Технологии" link="#techs" />
      <Button title="Студент" link="#I'm" />
    </NavTabStyled>
  );
}
