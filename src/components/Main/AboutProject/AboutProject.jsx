import React from 'react';

import {
  AboutProjectColumn,
  AboutProjectColumns,
  AboutProjectColumnSubtitle,
  AboutProjectColumnTitle,
  AboutProjectProgressBar,
  AboutProjectProgressBarDescription,
  AboutProjectProgressBarDescriptions,
  AboutProjectProgressBarScale,
  AboutProjectProgressBarScales,
  AboutProjectStyled,
  AboutProjectTitle,
} from './styled';

export function AboutProject() {
  return (
    <AboutProjectStyled id="about-project">
      <AboutProjectTitle>О проекте</AboutProjectTitle>
      <AboutProjectColumns>
        <AboutProjectColumn>
          <AboutProjectColumnTitle>
            Дипломный проект включал 5 этапов
          </AboutProjectColumnTitle>
          <AboutProjectColumnSubtitle>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональностиь, финальные доработки и ещё много умных слов.
          </AboutProjectColumnSubtitle>
        </AboutProjectColumn>
        <AboutProjectColumn>
          <AboutProjectColumnTitle>
            На выполнение диплома ушло 5 недель
          </AboutProjectColumnTitle>
          <AboutProjectColumnSubtitle>
            У каждого этапа был мягонький и очень жёсткий дедлайн, которые нужно
            было соблюдать, чтобы выжить.
          </AboutProjectColumnSubtitle>
        </AboutProjectColumn>
      </AboutProjectColumns>
      <AboutProjectProgressBar>
        <AboutProjectProgressBarScales>
          <AboutProjectProgressBarScale green>
            1 неделя
          </AboutProjectProgressBarScale>
          <AboutProjectProgressBarScale grey>
            4 недели
          </AboutProjectProgressBarScale>
        </AboutProjectProgressBarScales>
        <AboutProjectProgressBarDescriptions>
          <AboutProjectProgressBarDescription>
            Back-end
          </AboutProjectProgressBarDescription>
          <AboutProjectProgressBarDescription>
            Front-end
          </AboutProjectProgressBarDescription>
        </AboutProjectProgressBarDescriptions>
      </AboutProjectProgressBar>
    </AboutProjectStyled>
  );
}
