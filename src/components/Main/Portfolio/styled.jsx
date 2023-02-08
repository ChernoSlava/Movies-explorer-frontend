import styled from 'styled-components/macro';

export const PortfolioStyled = styled.section`
  margin: 0;
  padding: 0;
  padding: 0 70px;

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 450px) {
    padding: 0 14px;
  }
`;
export const PortfolioTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${props => props.theme.colors.grey10};
  mix-blend-mode: normal;

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;
export const PortfolioContainer = styled.ul`
  padding: 0;
  margin: 0;
  padding-top: 50px;
  padding-bottom: 125px;
  list-style: none;

  @media screen and (max-width: 768px) {
    padding-bottom: 90px;
  }

  @media screen and (max-width: 450px) {
    padding-top: 40px;
    padding-bottom: 70px;
  }
`;
export const PortfolioList = styled.li`
  padding: 0;
  margin: 0;
  padding-top: 20px;
  border-bottom: 1px solid #424242;
  height: 69px;

  &:nth-child(3) {
    border-bottom: none;
  }
  &:nth-child(1) {
    padding-top: 0;
  }
  @media screen and (max-width: 450px) {
    height: 47px;
  }
`;
export const PortfolioLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
`;
export const PortfolioText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 50px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.white10};

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
export const PortfolioIco = styled.img`
  width: 29px;
  height: 60px;

  @media screen and (max-width: 768px) {
    width: 27px;
  }
  @media screen and (max-width: 450px) {
    width: 18px;
    height: 28px;
  }
`;
