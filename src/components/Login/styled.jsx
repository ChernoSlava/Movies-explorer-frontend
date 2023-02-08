import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components/macro';

import closedEye from '../../images/ClosedEye.png';
import openedEye from '../../images/SauronEye.png';

export const LoginStyled = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 396px;

  @media screen and (max-width: 450px) {
    max-width: 260px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 450px) {
    align-items: center;
  }
`;

export const LoginLogo = styled.div`
  padding: 70px 0 40px;

  @media screen and (max-width: 768px) {
    padding: 232px 0 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 58px 0 50px;
  }
`;

export const LoginTitle = styled.h1`
  margin: 0;
  padding: 0;
  padding-bottom: 40px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.white10};

  @media screen and (max-width: 450px) {
    padding-bottom: 80px;
  }
`;
export const LoginFieldset = styled.fieldset`
  border: 0;
  padding: 0;
  width: 100%;
  display: flex;
  gap: 31px;
  flex-direction: column;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LoginFieldError = styled.span`
  margin: 0;
  padding: 0;
  position: absolute;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.red10};
  display: none;

  ${props =>
    props.isError &&
    `
        top: 72px;
        left: 0;
        display: inline;   
    `}
`;
const fade = keyframes`
    from {
        opacity: 1;
        visibility: visible;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }
`;
export const LoginField = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.grey10};
  padding-bottom: 10px;
`;

export const LoginInput = styled.input`
  margin: 0;
  padding: 0;
  background: ${props => props.theme.colors.grey20};
  border-radius: 8px;
  border: transparent;
  height: 46px;
  padding-left: 15px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${props => props.theme.colors.white10};

  ${props =>
    props.isError &&
    `
        color: ${props.theme.colors.red10};
          
    `}

  animation: ${props =>
    props.isDisa
      ? css`
          ${fade} 2s ease forwards;
        `
      : ''};
`;

export const LoginCheckbox = styled.input`
  cursor: pointer;
  display: none;
`;

export const LoginLabelForCheckbox = styled.label`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 30px;
  right: 16px;
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(${closedEye});
  transition: 0.1s;

  ${props =>
    props.active &&
    `
        background-image: url(${openedEye});
        transition: 1s;  
    `}
`;

export const LoginButtonContainer = styled.div`
  padding-top: 159px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`;

export const LoginSubmitButton = styled.button`
  margin: 0;
  padding: 0;
  border: transparent;
  background: ${props => props.theme.colors.blue10};
  border-radius: 3px;
  width: 100%;
  min-height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.white10};

  ${props =>
    props.isBlock &&
    `
        color: ${props.theme.colors.grey40};
        cursor: not-allowed;
        background: ${props.theme.colors.grey30};
        &:hover{
            opacity: 1; 
        }
    `}
`;

export const LoginLinkText = styled.p`
  margin: 0;
  padding: 0;
  padding-top: 16px;
  padding-bottom: 70px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.grey10};
`;

export const LoginLink = styled(Link)`
  margin: 0;
  padding: 0;
  padding-left: 6px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.blue10};
  text-decoration: none;
`;
