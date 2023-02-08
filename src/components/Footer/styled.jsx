import styled from 'styled-components/macro';

export const FooterStyled = styled.footer`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 172px;

  @media screen and (max-width: 450px) {
    height: 253px;
  }
`;

export const FooterTitle = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${props => props.theme.colors.grey10};
  padding-top: 79px;

  @media screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const FooterBorder = styled.div`
  margin: 20px 70px;
  border: 1px solid #424242;

  @media screen and (max-width: 768px) {
    margin: 20px 30px;
  }

  @media screen and (max-width: 450px) {
    margin: 20px 10px 30px;
  }
`;

export const FooterNav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const FooterCopy = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${props => props.theme.colors.white10};

  @media screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.colors.grey10};
  }
`;

export const FooterLinks = styled.div`
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${props => props.theme.colors.white10};
  align-self: center;

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const FooterLink = styled.a`
  color: ${props => props.theme.colors.white10};
  text-decoration: none;

  @media screen and (max-width: 450px) {
    align-self: center;
  }

  ${props =>
    props.last &&
    `
        padding-left: 20px;
            
        @media screen and (max-width: 450px) {
            padding-left: 0;
            padding-top: 12px;
            padding-bottom: 30px;
        }
    `}
`;
