import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { NAVIGATION, ROUTER_PATH } from '../../constants';
import account from '../../images/Account.svg';

import {
  NavigationBurgerButton,
  NavigationCloseButton,
  NavigationLink,
  NavigationLinkIco,
  NavigationList,
  NavigationListNone,
  NavigationNone,
  NavigationSidebar,
  NavigationSidebarContainer,
  NavigationSidebardList,
  NavigationSidebardMenu,
  NavigationSidebarLink,
  NavigationSidebarNavLink,
  NavigationSidebarProfile,
  NavigationStyled,
} from './styled';

export function Navigation({ loggedIn }) {
  const location = useLocation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const setActiveForMovies = location.pathname === ROUTER_PATH.MOVIES;
  const setActiveForSavedMovies =
    location.pathname === ROUTER_PATH.SAVED_MOVIES;
  const setActiveForMain = location.pathname === ROUTER_PATH.MAIN;
  const setActiveMenu = menuIsOpen;

  return (
    <NavigationStyled>
      <NavigationNone>
        {loggedIn && (
          <>
            <NavigationLink
              to={ROUTER_PATH.MOVIES}
              $first
              $active={setActiveForMovies}>
              Фильмы
            </NavigationLink>
            <NavigationLink
              to={ROUTER_PATH.SAVED_MOVIES}
              $active={setActiveForSavedMovies}>
              Сохранённые фильмы
            </NavigationLink>
          </>
        )}
      </NavigationNone>
      <NavigationList>
        {!loggedIn && (
          <>
            <li>
              <NavigationLink to={ROUTER_PATH.REGISTER} $mini>
                Регистрация
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to={ROUTER_PATH.LOGIN} $mini $btn>
                Войти
              </NavigationLink>
            </li>
          </>
        )}
        {loggedIn && (
          <NavigationListNone>
            <NavigationLink to={ROUTER_PATH.PROFILE} $profile>
              Аккаунт
              <NavigationLinkIco
                src={account}
                alt={NAVIGATION.ICO_ACCOUNT_ALT}
              />
            </NavigationLink>
          </NavigationListNone>
        )}
      </NavigationList>
      {loggedIn && (
        <NavigationBurgerButton
          type={NAVIGATION.BURGER_BTN_TYPE}
          aria-label={NAVIGATION.ARIA_LABEL_BTN_BURGER}
          onClick={handleToggleMenu}
        />
      )}
      {loggedIn && (
        <NavigationSidebar active={setActiveMenu}>
          <NavigationSidebarContainer>
            <NavigationCloseButton onClick={handleToggleMenu} />
            <NavigationSidebardMenu>
              <NavigationSidebardList>
                <NavigationSidebarNavLink
                  to={ROUTER_PATH.MAIN}
                  $active={setActiveForMain}>
                  Главная
                </NavigationSidebarNavLink>
              </NavigationSidebardList>
              <NavigationSidebardList>
                <NavigationSidebarNavLink
                  to={ROUTER_PATH.MOVIES}
                  $active={setActiveForMovies}>
                  Фильмы
                </NavigationSidebarNavLink>
              </NavigationSidebardList>
              <NavigationSidebardList>
                <NavigationSidebarNavLink
                  to={ROUTER_PATH.SAVED_MOVIES}
                  $active={setActiveForSavedMovies}>
                  Сохранённые фильмы
                </NavigationSidebarNavLink>
              </NavigationSidebardList>
            </NavigationSidebardMenu>
            <NavigationSidebarProfile>
              <NavigationSidebarLink to={ROUTER_PATH.PROFILE}>
                Аккаунт
                <NavigationLinkIco
                  src={account}
                  alt={NAVIGATION.ICO_ACCOUNT_ALT}
                />
              </NavigationSidebarLink>
            </NavigationSidebarProfile>
          </NavigationSidebarContainer>
        </NavigationSidebar>
      )}
    </NavigationStyled>
  );
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
