import styled, { keyframes } from 'styled-components/macro';

export const PreloaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  background-color: ${props => props.theme.colors.black0};
`;

export const PreloaderContainer = styled.div`
  position: relative;
`;

const PreloaderRoundSpin = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }    
`;

export const PreloaderRound = styled.div`
  div {
    border: 10px inset #3ddc84;
    border-radius: 100%;
    padding: 4px;
    animation: ${PreloaderRoundSpin} 15s linear infinite;
  }
`;
