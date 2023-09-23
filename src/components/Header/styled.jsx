import styled from 'styled-components/macro';

export const HeaderStyled = styled.header`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 74px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  padding: 18px 70px;

  @media screen and (max-width: 768px) {
    padding: 18px 50px;
  }
  @media screen and (max-width: 450px) {
    padding: 14px 18px;
  }
`;
