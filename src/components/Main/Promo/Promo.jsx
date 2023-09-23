import React from 'react';

import { NavTab } from '../NavTab';

import { PromoScreen, PromoStyled, PromoTitle } from './styled';

export function Promo() {
  return (
    <PromoStyled>
      <PromoScreen>
        <PromoTitle>
          Учебный проект студента факультета Веб-разработки.
        </PromoTitle>
        <NavTab />
      </PromoScreen>
    </PromoStyled>
  );
}
