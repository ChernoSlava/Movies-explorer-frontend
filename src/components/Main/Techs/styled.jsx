import styled from 'styled-components/macro';

export const TechsStyled = styled.section`
  margin: 0;
  padding: 0;
  background: ${props => props.theme.colors.grey60};
  padding: 100px 70px 0;

  @media screen and (max-width: 768px) {
    padding: 90px 50px 0;
  }
  @media screen and (max-width: 450px) {
    padding: 70px 18px 0;
  }
`;
export const TechsTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.white10};
  height: 50px;
  border-bottom: 1px solid #dadada;

  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 22px;
    /* border-bottom: 1px solid #000000; */
  }
`;
export const TechsColumn = styled.div`
  padding-top: 90px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 83px;
  }
  @media screen and (max-width: 450px) {
    padding-top: 60px;
    padding-bottom: 50px;
  }
`;
export const TechsColumnTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.white10};
  padding-bottom: 26px;

  @media screen and (max-width: 768px) {
    padding-bottom: 22px;
  }
  @media screen and (max-width: 450px) {
    font-size: 30px;
    line-height: 36px;
    padding-bottom: 24px;
  }
`;
export const TechsColumnSubtitle = styled.p`
  margin: 0;
  padding: 0;
  max-width: 460px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.white10};

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media screen and (max-width: 450px) {
    max-width: 292px;
    font-size: 11px;
    line-height: 16px;
  }
`;

export const TechsContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    padding-bottom: 90px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 84px);
  }
  @media screen and (max-width: 450px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-bottom: 70px;
    display: grid;
    grid-template-columns: 84px 84px;
    justify-items: center;
  }
`;
export const TechsElement = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 90px;
  height: 60px;
  background: ${props => props.theme.colors.grey50};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    min-width: 84px;
    height: 57px;
  }
`;
export const TechsElementText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.white10};

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
