import styled from 'styled-components/macro';

import find from '../../../images/Find.svg';

export const SearchFormStyled = styled.div`
  margin: 0;
  padding: 0;
  padding: 70px 70px 0;

  @media screen and (max-width: 768px) {
    padding: 80px 30px 0;
  }
  @media screen and (max-width: 520px) {
    padding: 89px 14px 0;
  }
`;
export const SearchFormMain = styled.form`
  width: 100%;
  border: none;
`;
export const SearchFormFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 47px;
  border-bottom: 1px solid #424242;
  align-items: center;
  position: relative;

  @media screen and (max-width: 520px) {
    height: 37px;
  }
`;
export const SearchFormFieldError = styled.span`
  position: absolute;
  top: 55px;
  left: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 12px;
  color: ${props => props.theme.colors.red10};

  @media screen and (max-width: 520px) {
    font-size: 10px;
    top: 42px;
  }
`;
export const SearchFormInput = styled.input`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: ${props => props.theme.colors.grey10};
  outline: none;

  @media screen and (max-width: 520px) {
    font-size: 18px;
    line-height: 22px;
    max-width: 200px;
  }
`;
export const SearchFormButton = styled.button`
  border: none;
  width: 34px;
  height: 34px;
  background: url(${find});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
export const SearchFormCheckboxContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 47px;
  display: flex;

  @media screen and (max-width: 768px) {
    padding-top: 29px;
    padding-bottom: 60px;
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 520px) {
    padding-top: 40px;
    padding-bottom: 50px;
    justify-content: center;
  }
`;
export const SearchFormCheckboxLabel = styled.label`
  padding: 0;
  margin: 0;
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white30};
  cursor: pointer;
  &:after {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10%;
    left: 5%;
    border-radius: 50%;
    content: '';
    background-color: ${props => props.theme.colors.white10};
    transition: 0.3s;
  }
  ${props =>
    props.checked &&
    `
    background: ${props.theme.colors.extraGreen20};
    &:after {
    transform: translate(100%);
    }
    
  `}
`;

export const SearchFormCheckbox = styled.input`
  cursor: pointer;
  display: none;
`;

export const SearchFormText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${props => props.theme.colors.white10};
  padding-left: 14px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 16px;
  }
  @media screen and (max-width: 520px) {
    padding-right: 13px;
    font-size: 18px;
  }
`;
