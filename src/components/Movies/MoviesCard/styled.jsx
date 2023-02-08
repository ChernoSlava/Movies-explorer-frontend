import styled from 'styled-components/macro';

import delet from '../../../images/delete_film.svg';
import save from '../../../images/Save.svg';
import saved from '../../../images/Saved.svg';

export const MoviesCardStyled = styled.li`
  max-width: 364px;
  max-height: 281px;
  background: ${props => props.theme.colors.black50};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    max-width: 339px;
    max-height: 262px;
  }
  @media screen and (max-width: 540px) {
    max-width: 300px;
    width: 300px;
    height: 237px;
  }
`;
export const MoviesCardTrailer = styled.a`
  height: 203px;

  @media screen and (max-width: 768px) {
    height: 190px;
  }
`;
export const MoviesCardPoster = styled.img`
  height: 203px;
  object-fit: cover;
  background-position: center;
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media screen and (max-width: 768px) {
    height: 190px;
  }
  @media screen and (max-width: 540px) {
    max-height: 168px;
  }
`;
export const MoviesCardInfo = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;

  @media screen and (max-width: 768px) {
    padding-bottom: 14px;
  }
`;
export const MoviesCardTextContainer = styled.div`
  margin: 0;
  padding: 0;
`;
export const MoviesCardTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${props => props.theme.colors.white10};
  padding-top: 16px;
  padding-left: 16px;
  max-height: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 14px;
    padding-left: 14px;
  }
`;
export const MoviesCardTime = styled.h3`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.grey10};
  padding-top: 17px;
  padding-left: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 15px;
    padding-left: 14px;
  }
  @media screen and (max-width: 540px) {
    padding-top: 14px;
  }
`;
export const MoviesCardButton = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  align-self: start;
  margin-top: 10px;
  background-image: url(${save});

  ${props =>
    props.save &&
    `
    background-image: url(${saved});
  `}
  ${props =>
    props.delet &&
    `
    background-image: url(${delet});
  `}
`;
