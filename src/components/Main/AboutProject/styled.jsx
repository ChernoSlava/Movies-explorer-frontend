import styled from 'styled-components/macro';

export const AboutProjectStyled = styled.section`
  margin: 0;
  padding: 0;
  padding: 110px 70px 0;

  @media screen and (max-width: 768px) {
    padding: 90px 50px 0;
  }
  @media screen and (max-width: 450px) {
    padding: 70px 18px 0;
  }
`;
export const AboutProjectTitle = styled.h2`
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
  }
`;
export const AboutProjectColumns = styled.div`
  padding-top: 70px;
  padding-bottom: 110px;
  display: flex;
  gap: 40px;

  @media screen and (max-width: 768px) {
    padding-bottom: 93px;
    gap: 30px;
  }
  @media screen and (max-width: 450px) {
    padding-top: 60px;
    padding-bottom: 60px;
    gap: 56px;
    flex-direction: column;
  }
`;
export const AboutProjectColumn = styled.div`
  width: 50%;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const AboutProjectColumnTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.white10};
  padding-bottom: 26px;

  @media screen and (max-width: 768px) {
    padding-bottom: 22px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 16px;
  }
`;
export const AboutProjectColumnSubtitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.white10};

  @media screen and (max-width: 768px) {
    line-height: 18px;
  }
  @media screen and (max-width: 450px) {
    font-size: 11px;
    line-height: 16px;
  }
`;
export const AboutProjectProgressBar = styled.div``;
export const AboutProjectProgressBarScales = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  @media screen and (max-width: 450px) {
    grid-template-columns: 100px 4fr;
  }
`;
export const AboutProjectProgressBarScale = styled.div`
  height: 36px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.green &&
    `
      background: ${props.theme.colors.extraGreen20};
      color: ${props.theme.colors.black30};
  `}
  ${props =>
    props.grey &&
    `
      background: ${props.theme.colors.grey50};
      color: ${props.theme.colors.white10};
  `}
    @media screen and (max-width: 450px) {
    height: 35px;
    font-size: 11px;
    line-height: 13px;
  }
`;
export const AboutProjectProgressBarDescriptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  @media screen and (max-width: 450px) {
    grid-template-columns: 100px 4fr;
  }
`;
export const AboutProjectProgressBarDescription = styled.p`
  margin: 0;
  padding: 0;
  padding-top: 14px;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.grey10};
  padding-bottom: 110px;

  @media screen and (max-width: 768px) {
    font-family: ${props => props.theme.fontFamily.standart};
    font-weight: 400;
    padding-bottom: 90px;
  }
  @media screen and (max-width: 450px) {
    padding-top: 10px;
    font-size: 14px;
    line-height: 17px;
    padding-bottom: 70px;
  }
`;
