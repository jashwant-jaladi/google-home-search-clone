import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #202124;
    color: #e8eaed;
    transition: all 0.2s ease-in-out;
    min-height: 100vh;
  }

  #root {
    height: 100%;
  }

  html {
    font-size: 16px;
    
    @media (max-width: 480px) {
      font-size: 14px;
    }

    @media (min-width: 1440px) {
      font-size: 18px;
    }

    @media (orientation: landscape) and (max-height: 500px) {
      font-size: 15px;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 768px) {
      padding: 0 0.75rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
      animation: none !important;
    }
  }
`;
