import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import burgerBtn from '../../images/burger-menu.svg';
import closeBtn from '../../images/CloseIcon.svg';

export const NavigationStyled = styled.nav`
  display: flex;
`;
export const NavigationNone = styled.ul`
  margin: 0;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavbarContainer = styled('nav')`
  width: 100%;
  height: ${props => (props.extend ? '100vh' : '60px')};
  background-color: purple;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 60px;
  }
`;
export const NavigationLink = styled(Link)`
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.colors.white10};
  text-decoration: none;
  ${props =>
    props.$active &&
    `
        font-weight: 500;
    `}
  ${props =>
    props.$first &&
    `
        padding-right: 20px;
    `}
    ${props =>
    props.$mini &&
    `
        font-size: 12px;
        @media screen and (max-width: 450px) {
            font-size: 10px;
        }
    `}
    ${props =>
    props.$btn &&
    `
        width: 76px;
        height: 32px;
        display: flex;
        background: ${props.theme.colors.extraGreen20};
        border-radius: 3px;
        margin-left: 30px;
        align-items: center;
        color: ${props.theme.colors.black30};
        justify-content: center;

        @media screen and (max-width: 450px) {
            width: 54px;
            height: 26px;
            margin-left: 14px;
        }
    `}

    ${props =>
    props.$profile &&
    `
        display: flex;
        align-items: center;
    `}
`;
export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
  padding-left: 50px;
`;

export const NavigationLinkIco = styled.img`
  margin-left: 13px;
`;

export const NavigationListNone = styled.li`
  margin: 0;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavigationBurgerButton = styled.button`
  display: none;
  background: url(${burgerBtn});
  width: 44px;
  height: 44px;
  background-position: center;
  background-repeat: no-repeat;
  border: transparent;
  cursor: pointer;
  transition: opacity 0.4s ease-out;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 450px) {
    width: 40px;
    height: 43px;
  }
`;
export const NavigationSidebar = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 300px;
    z-index: 1;
    width: 80vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #202020;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;

    ${props =>
      props.active &&
      `
        visibility: visible;
        top: 0;
        left: 20%;
        opacity: 1;
      `}
  }
  @media screen and (max-width: 450) {
    width: 100vw;

    ${props =>
      props.active &&
      `
              left: 0;
          `}
  }
`;

export const NavigationSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavigationCloseButton = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 22.44px;
  right: 22.44px;
  background-image: url(${closeBtn});
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 450) {
    top: 13.44px;
    right: 13.44px;
  }
`;
export const NavigationSidebardMenu = styled.ul`
  padding-top: 159px;
  margin: 0;
`;
export const NavigationSidebardList = styled.li`
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${props => props.theme.colors.white10};
  padding-bottom: 28px;
  list-style-type: none;
`;

export const NavigationSidebarNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.white10};

  ${props =>
    props.$active &&
    `
        border-bottom: 2px solid #FFFFFF;
        height: 26px;
    `}
`;
export const NavigationSidebarProfile = styled.div`
  padding-bottom: 92px;
`;
export const NavigationSidebarLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white10};
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  display: flex;
`;
