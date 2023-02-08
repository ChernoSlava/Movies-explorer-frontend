import React from 'react';
import { Outlet } from 'react-router-dom';

import { Popup } from '../Popup';

import { GlobalStyles } from './GlobalStyles';
import { AppLayoutStyled } from './styled';

import './AppLayout.css';

export function AppLayout({ ...props }) {
  return (
    <>
      <GlobalStyles />
      <AppLayoutStyled>
        <Popup {...props} />
        <Outlet />
      </AppLayoutStyled>
    </>
  );
}
