import styled from 'styled-components/macro';

import icoClose from '../../images/Close-Icon.svg';
import icoCloseMini from '../../images/Close-Icon-mini.svg';

export const PopupStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.colors.black40};
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: 0s, 0.4s linear;

  ${props =>
    props.opened &&
    `
        display: flex;
        opacity: 1;
        visibility: visible;
    `}
`;

export const PopupContainer = styled.div`
  width: 300px;
  height: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 15%);
  border-radius: 10px;
  background: ${props => props.theme.colors.purple10};
  background: radial-gradient(circle, rgb(141 39 158) 0%, rgb(36 73 60) 100%);

  @media screen and (max-width: 600px) {
    width: 282px;
    height: 230px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    height: 220px;
  }
`;
export const PopupCloseButton = styled.button`
  background-image: url(${icoClose});
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  position: absolute;
  top: -35px;
  right: -35px;
  border: 0;
  background-color: transparent;
  outline: none;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    background-image: url(${icoCloseMini});
    width: 20px;
    height: 20px;
    top: -20px;
    right: -22px;
  }
`;

export const PopupIcon = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
`;

export const PopupDescription = styled.h3`
  max-width: 358px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-size: 24px;
  color: ${props => props.theme.colors.black30};
  text-align: center;
  margin: 0 auto;
  font-weight: 900;
  line-height: 29px;
  margin-top: 32px;
`;
