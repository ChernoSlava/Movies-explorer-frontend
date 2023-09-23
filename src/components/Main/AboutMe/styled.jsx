import styled from 'styled-components/macro';

import MyFoto from '../../../images/MyFoto.jpg';

export const AboutMeStyled = styled.section`
  margin: 0;
  padding: 0;
  padding: 110px 70px 0;

  @media screen and (max-width: 768px) {
    padding: 90px 50px 0;
  }

  @media screen and (max-width: 600px) {
    padding: 70px 14px 0;
  }
`;
export const AboutMeTitle = styled.h2`
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

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const AboutMeContainer = styled.div`
  padding: 66px 0 110px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding-bottom: 90px;
  }

  @media screen and (max-width: 600px) {
    padding: 60px 0 70px;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const AboutMeInfo = styled.div`
  max-width: 600px;

  @media screen and (max-width: 768px) {
    max-width: 364px;
  }
  @media screen and (max-width: 600px) {
    max-width: 292px;
  }
`;
export const AboutMeName = styled.h3`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 58px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.white10};

  padding-bottom: 18px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;

    padding-bottom: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 36px;

    padding-bottom: 20px;
  }
`;
export const AboutMeProfession = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: ${props => props.theme.colors.white10};
  mix-blend-mode: normal;

  padding-bottom: 26px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;

    padding-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 11px;
    line-height: 16px;
  }
`;
export const AboutMeDescription = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.colors.white10};
  mix-blend-mode: normal;

  padding-bottom: 100px;
  max-height: 88px;
  overflow: hidden;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;

    padding-bottom: 87px;
    max-height: 108px;
  }
  @media screen and (max-width: 600px) {
    font-size: 11px;
    line-height: 16px;

    padding-bottom: 40px;
    max-height: 112px;
    padding-right: 0;
  }
`;
export const AboutMeLink = styled.a`
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.colors.white10};
  text-decoration: none;
`;
export const AboutMeImageContainer = styled.div`
  @media screen and (max-width: 600px) {
    padding-bottom: 40px;
  }
`;
export const AboutMeImage = styled.div`
  width: 270px;
  height: 327px;
  background-image: url(${MyFoto});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 255px;
    height: 307px;
  }
  @media screen and (max-width: 600px) {
    width: 292px;
    height: 352px;
  }
`;
