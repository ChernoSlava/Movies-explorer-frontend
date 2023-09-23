import styled from 'styled-components/macro';

export const ProfileStyled = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProfileForm = styled.form`
  width: 100%;
  height: 100%;
`;
export const ProfileTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${props => props.theme.colors.white10};
  padding-top: 74px;
  padding-bottom: 123px;

  @media screen and (max-width: 768px) {
    padding-top: 236px;
    padding-bottom: 96px;
  }

  @media screen and (max-width: 460px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }
`;
export const ProfileFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileLabel = styled.label`
  display: flex;
  flex-direction: row;
  width: 410px;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 460px) {
    width: 260px;
  }
`;
export const ProfileFieldError = styled.span`
  margin: 0;
  padding: 0;
  position: absolute;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.red10};

  ${props =>
    props.nam &&
    `
        top: -20px;
        left: 0;
    `}
  ${props =>
    props.email &&
    `
        top: 20px;
        left: 0;
    `}
`;
export const ProfileField = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: ${props => props.theme.colors.white10};
`;
export const ProfileInput = styled.input`
  margin: 0;
  padding: 0;
  border: transparent;
  background-color: transparent;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: right;
  color: ${props => props.theme.colors.white10};

  ${props =>
    props.err &&
    `
        color: ${props.theme.colors.red10};
    `}
`;
export const ProfileBorder = styled.div`
  width: 410px;
  margin: 16px 0 17px;
  border: 1px solid #424242;

  @media screen and (max-width: 460px) {
    width: 260px;
  }
`;
export const ProfileButtonsContainer = styled.div`
  padding-top: 210px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 460px) {
    padding-top: 379px;
  }
`;
export const ProfileButton = styled.button`
  background-color: transparent;
  border: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;

  ${props =>
    props.edit &&
    `
        font-weight: 400;
        color: ${props.theme.colors.white10};
    `}
  ${props =>
    props.disab &&
    `
        color: ${props.theme.colors.grey40};
        cursor: not-allowed; 

        &:hover {
           opacity: 1; 
        }
    `}
    ${props =>
    props.exit &&
    `
        font-weight: 500;
        color: ${props.theme.colors.red10};
        padding-bottom: 93px;

        @media screen and (max-width: 768px) {
            padding-bottom: 269px;
        }

        @media screen and (max-width: 460px) {
            padding-bottom: 40px;
        }
    `}
`;
