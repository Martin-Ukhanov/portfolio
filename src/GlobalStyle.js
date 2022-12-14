import { createGlobalStyle } from 'styled-components';
import poppinsWoff from './fonts/Poppins/Poppins.woff';
import poppinsWoff2 from './fonts/Poppins/Poppins.woff2';
import poppinsTtf from './fonts/Poppins/Poppins.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${poppinsWoff}) format('woff'),
      url(${poppinsWoff2}) format('woff2'),
      url(${poppinsTtf}) format('truetype');
  }

  :root {
    --color-1: #000000;
    --color-2: #FFFFFF;
    --fz-xs: 1.1rem;
    --fz-sm: 2rem;
    --fz-md: 3rem;
    --fz-lg: 4rem;
    --fz-xl: 8rem;
    --min-width: 320px;
    --spacing: 15px;
    --border-width: 3px;
    --menu-width: 200px;
  }

  html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  a {
    font-size: var(--fz-xs);
    color: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
    background: none;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: var(--fz-xs);
    cursor: pointer;
  }

  section {
    width: 100%;
    max-width: 1000px;
    min-height: 100vh;
    padding: var(--spacing);
  }

  .icon {
    display: block;
  }

  .section-heading {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 3rem;
    text-align: center;
  }

  .section-heading::before {
    content: '';
    flex: 1;
    margin-right: var(--spacing);
    border-bottom: var(--border-width) solid var(--color-1);
  }

  .section-heading::after {
    content: '';
    flex: 1;
    margin-left: var(--spacing);
    border-bottom: var(--border-width) solid var(--color-1);
  }
`;

export default GlobalStyle;
