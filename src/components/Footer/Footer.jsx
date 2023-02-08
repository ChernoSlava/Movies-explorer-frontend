import React from 'react';

import {
  FooterBorder,
  FooterCopy,
  FooterLink,
  FooterLinks,
  FooterNav,
  FooterStyled,
  FooterTitle,
} from './styled';

export function Footer() {
  return (
    <FooterStyled>
      <FooterTitle>Учебный проект Яндекс.Практикум х BeatFilm.</FooterTitle>
      <FooterBorder />
      <FooterNav>
        <FooterCopy>&copy;{new Date().getFullYear()}</FooterCopy>
        <FooterLinks>
          <FooterLink
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer">
            Яндекс.Практикум
          </FooterLink>
          <FooterLink
            href="https://github.com/ChernoSlava"
            target="_blank"
            rel="noreferrer"
            last>
            Github
          </FooterLink>
        </FooterLinks>
      </FooterNav>
    </FooterStyled>
  );
}
