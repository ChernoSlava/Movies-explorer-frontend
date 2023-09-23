import styled from 'styled-components/macro';

export const MoviesCardListStyled = styled.section`
  margin: 0;
  padding: 0;
  padding: 70px 70px 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 540px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MoviesCardListNothing = styled.span`
  align-self: center;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  border-bottom: 1px inset;
  color: ${props => props.theme.colors.white20};

  @media screen and (max-width: 450px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const MoviesCardListElement = styled.ul`
  margin: 0;
  padding: 0;
  row-gap: 24px;
  column-gap: 37px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 800px) {
    row-gap: 30px;
    column-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 540px) {
    row-gap: 10px;
    column-gap: 14px;
    justify-items: center;
    grid-template-columns: 1fr;
  }
`;

export const MoviesCardButton = styled.button`
  margin: 0;
  padding: 0;
  margin-top: 50px;
  margin-bottom: 80px;
  width: 100%;
  height: 36px;
  background: #2f2f2f;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.white10};
  justify-content: center;

  @media screen and (max-width: 540px) {
    width: 0;
    min-width: 340px;
  }
  @media screen and (max-width: 450px) {
    min-width: 300px;
  }
`;
