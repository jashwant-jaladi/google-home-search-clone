import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #000;
    transition: all 0.2s ease-in-out;
    height: 100%; 
  }

  #root {
    height: 100%; 
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #202124; 
      color: #e8eaed;
    }
  }
`;
