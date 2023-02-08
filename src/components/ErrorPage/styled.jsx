import styled, { css, keyframes } from 'styled-components/macro';

import alien from '../../images/ErrorPage-min.jpg';

export const ErrorPageStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${alien});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
`;
const blur = keyframes`
    from {
        text-shadow:0px 0px 10px rgb(177, 56, 56),
        0px 0px 10px rgb(177, 56, 56), 
        0px 0px 15px rgb(177, 56, 56),
        0px 0px 25px rgb(177, 56, 56),
        0px 0px 25px #7B96B8,
        0px 5px 25px #7B96B8;
    }
`;

export const ErrorPageBtn = styled.button`
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.extraGreen10};
  text-decoration: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.black10};
  background-position: center;
  border: transparent;
  text-transform: uppercase;
  width: fit-content;
  align-self: center;
  margin-bottom: 60px;
  height: 40px;
  border: 1px inset rgba(49, 190, 84, 0.1);
  border-radius: 20px;

  &:hover {
    border: 2px inset rgba(49, 190, 84);
    background-color: ${props => props.theme.colors.black20};
    transition: ease-in-out 0.1s;
  }

  animation: ${css`
    ${blur} .6s ease-in-out infinite
  `};
`;
