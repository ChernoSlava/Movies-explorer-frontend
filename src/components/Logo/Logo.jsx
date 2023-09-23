import React from 'react';
import { Link } from 'react-router-dom';

import { LOGO, ROUTER_PATH } from '../../constants';
import ico from '../../images/Logo.svg';

import { LogoIco } from './styled';

export function Logo() {
  return (
    <Link to={ROUTER_PATH.MAIN} aria-label={LOGO.ARIAL_LABEL}>
      <LogoIco src={ico} alt={LOGO.LOGO_ALT} />
    </Link>
  );
}
