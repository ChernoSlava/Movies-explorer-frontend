import styled from 'styled-components/macro';

import promoImage from '../../../images/MainIco-min.jpg';

export const PromoStyled = styled.section`
  margin: 0;
  padding: 0;
  padding: 20px 40px 0;

  @media screen and (max-width: 486px) {
    padding: 14px 14px 0 14px;
  }
`;
export const PromoScreen = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 493px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.grey60};
  border-radius: 10px;
  background-image: url(${promoImage});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 834px;
  }
  @media screen and (max-width: 486px) {
    height: 586px;
  }
`;
export const PromoTitle = styled.h1`
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
  padding-top: 160px;
  padding-bottom: 151px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 52px;
    padding-top: 350px;
    padding-bottom: 314px;
  }
  @media screen and (max-width: 616px) {
    font-size: 30px;
  }
  @media screen and (max-width: 486px) {
    font-size: 29px;
    line-height: 37px;
    padding-top: 220px;
    padding-bottom: 212px;
  }
`;
