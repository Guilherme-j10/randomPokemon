import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;

    > body, html {
      height: 100%;

      > img {
        max-width: 100%;
      }
    }
  }
`;

export default GlobalStyle;