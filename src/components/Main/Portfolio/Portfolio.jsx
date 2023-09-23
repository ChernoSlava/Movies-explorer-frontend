import React from 'react';

import errow from '../../../images/errow.svg';

import {
  PortfolioContainer,
  PortfolioIco,
  PortfolioLink,
  PortfolioList,
  PortfolioStyled,
  PortfolioText,
  PortfolioTitle,
} from './styled';

export function Portfolio() {
  return (
    <PortfolioStyled>
      <PortfolioTitle>Портфолио</PortfolioTitle>
      <PortfolioContainer>
        <PortfolioList>
          <PortfolioLink
            href="https://chernoslava.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer">
            <PortfolioText>Статичный сайт</PortfolioText>
            <PortfolioIco src={errow} alt="Стрелка ссылка" />
          </PortfolioLink>
        </PortfolioList>
        <PortfolioList>
          <PortfolioLink
            href="http://chernoslava.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer">
            <PortfolioText>Адаптивный сайт</PortfolioText>
            <PortfolioIco src={errow} alt="Стрелка ссылка" />
          </PortfolioLink>
        </PortfolioList>
        <PortfolioList>
          <PortfolioLink
            href="https://github.com/ChernoSlava/react-mesto-api-full"
            target="_blank"
            rel="noreferrer">
            <PortfolioText>Одностраничное приложение</PortfolioText>
            <PortfolioIco src={errow} alt="Стрелка ссылка" />
          </PortfolioLink>
        </PortfolioList>
      </PortfolioContainer>
    </PortfolioStyled>
  );
}
