import styled from 'styled-components/macro';

export const ButtonStyled = styled.button`
  background: ${props => props.theme.colors.grey50};
  border-radius: 10px;
  width: 96px;
  height: 36px;
  border: transparent;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    width: 82px;
    height: 26px;
  }
`;

export const ButtonText = styled.a`
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white10};
  text-decoration: none;
  justify-content: center;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
