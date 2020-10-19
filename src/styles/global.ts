import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    min-height: 100%;
  }

  body {
    background: ${props => props.theme.colors.primary_background};
    color: ${props => props.theme.colors.primary_text};
  }

  body, input, button {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
`;
