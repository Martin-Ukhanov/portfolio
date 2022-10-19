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

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
