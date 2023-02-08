import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`

  body {
    font-family: ${props => props.theme.fontFamily.standart};
    padding: 0;
    width: 100%;
    background-color: ${props => props.theme.global.bodyBack};
    color: ${props => props.theme.global.bodyText};
  }

  body::-webkit-scrollbar {
    width: 13px;
  }
  body::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #292929;
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(42, 1, 56);
    box-shadow: inset 0 0 6px rgba(2, 254, 57, 0.526);

  }

  #root {
    height: 100vh;
    width: inherit;
  }

  button:hover{
    opacity: 0.8;
  }

  a:hover{
    opacity: 0.7;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus
  input:-webkit-autofill, 
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 0;
    -webkit-text-fill-color: #ffffff;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background: -webkit-linear-gradient(
      top,  
      rgba(255,255,255,0) 0%,
      rgba(0,174,255,0.04) 50%,
      rgba(255,255,255,0) 51%,
      rgba(0,174,255,0.03) 100%);  
  }

`;
