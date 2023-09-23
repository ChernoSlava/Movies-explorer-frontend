import React from 'react';

import {
  AboutMeContainer,
  AboutMeDescription,
  AboutMeImage,
  AboutMeImageContainer,
  AboutMeInfo,
  AboutMeLink,
  AboutMeName,
  AboutMeProfession,
  AboutMeStyled,
  AboutMeTitle,
} from './styled';

export function AboutMe() {
  return (
    <AboutMeStyled id="I'm">
      <AboutMeTitle>Технологии</AboutMeTitle>
      <AboutMeContainer>
        <AboutMeInfo>
          <AboutMeName>Вячеслав</AboutMeName>
          <AboutMeProfession>Фронтенд-разработчик, 27 лет</AboutMeProfession>
          <AboutMeDescription>
            Родился в Саратове, закончил факультет концертно камерного
            исполнения в МГИК. Год назад начал учиться на web разработке на
            курсе Yandex.practikum и понял, что это как раз то, что мне нужно.
            Сейчас живу в маленько городе Турции, продолжаю учиться и
            дополнительно занимаюсь с ментором.
          </AboutMeDescription>
          <AboutMeLink href="https://github.com/ChernoSlava" Github />
        </AboutMeInfo>
        <AboutMeImageContainer>
          <AboutMeImage />
        </AboutMeImageContainer>
      </AboutMeContainer>
    </AboutMeStyled>
  );
}
