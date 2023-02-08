import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components/macro';

export const RegisterStyled = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 396px;

  @media screen and (max-width: 450px) {
    max-width: 260px;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 450px) {
    align-items: center;
  }
`;

export const RegisterLogo = styled.div`
  padding: 70px 0 40px;

  @media screen and (max-width: 768px) {
    padding: 232px 0 40px;
  }

  @media screen and (max-width: 450px) {
    padding: 58px 0 50px;
  }
`;

export const RegisterTitle = styled.h1`
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
    padding: 58px 0 50px;
  }
`;

export const RegisterFieldset = styled.fieldset`
  border: 0;
  padding: 0;
  width: 100%;
  display: flex;
  gap: 31px;
  flex-direction: column;
`;

export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const RegisterFieldError = styled.span`
  margin: 0;
  padding: 0;
  position: absolute;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.red10};

  ${props =>
    props.isError &&
    `
        top: 72px;
        left: 0;  
    `}
`;
export const RegisterField = styled.p`
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
export const RegisterInput = styled.input`
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
    props.isErr &&
    `
        color: ${props.theme.colors.red10};
    `}

  animation: ${props =>
    props.isInquiry
      ? css`
          ${fade} 2s ease forwards;
        `
      : ''};
`;
export const RegisterButtonsContainer = styled.div`
  padding-top: 69px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`;
export const RegisterButton = styled.button`
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

export const RegisterLinkText = styled.p`
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
export const RegisterLink = styled(Link)`
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
