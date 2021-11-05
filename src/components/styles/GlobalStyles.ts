import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
  background-color: #ffdf8c;
  width: 100%;
  height: 100%;
  padding: 45px;
  }
`;

export default GlobalStyles;
