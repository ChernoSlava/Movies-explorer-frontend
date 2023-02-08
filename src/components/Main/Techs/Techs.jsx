import React from 'react';

import {
  TechsColumn,
  TechsColumnSubtitle,
  TechsColumnTitle,
  TechsContainer,
  TechsElement,
  TechsElementText,
  TechsStyled,
  TechsTitle,
} from './styled';

export function Techs() {
  return (
    <TechsStyled id="techs">
      <TechsTitle>Технологии</TechsTitle>
      <TechsColumn>
        <TechsColumnTitle>7 технологий</TechsColumnTitle>
        <TechsColumnSubtitle>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </TechsColumnSubtitle>
      </TechsColumn>
      <TechsContainer>
        <TechsElement>
          <TechsElementText>HTML</TechsElementText>
        </TechsElement>
        <TechsElement>
          <TechsElementText>CSS</TechsElementText>
        </TechsElement>
        <TechsElement>
          <TechsElementText>JS</TechsElementText>
        </TechsElement>
        <TechsElement>
          <TechsElementText>REACT</TechsElementText>
        </TechsElement>
        <TechsElement>
          <TechsElementText>Git</TechsElementText>
        </TechsElement>
        <TechsElement>
          <TechsElementText>Express.js</TechsElementText>
        </TechsElement>
        <TechsElement>
          <TechsElementText>mongoDB</TechsElementText>
        </TechsElement>
      </TechsContainer>
    </TechsStyled>
  );
}
