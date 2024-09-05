import { extendTheme } from '@chakra-ui/react';
import { css } from '@emotion/react';

const Button = {
  baseStyle: {
    fontFamily: 'heading',
    letterSpacing: '0.05em',
  },
  variants: {
    solid: {
      bg: 'white',
      color: 'black',
      border: '1px solid black',
      boxShadow: '5px 5px 0px 0px #000000',
      _hover: {
        bg: 'limeGreen.200',
      },
    },
  },
};

export const theme = extendTheme({
  breakpoints: {
    '4xl': '128em',
    '3xl': '108em',
    '2xl': '96em',
    base: '0em',
    lg: '62em',
    md: '48em',
    sm: '30em',
    xl: '80em',
  },
  sizes: {
    '9xl': '108rem',
    '10xl': '120em',
  },
  fonts: {
    heading: `"Dela Gothic One", sans-serif`,
    body: `"Merriweather", serif`,
  },
  colors: {
    purplePlop: {
      50: '#f7f6fe',
      100: '#f2f1fe',
      200: '#e5e2fd',
      300: '#aaa1f7',
      400: '#9991de',
      500: '#8881c6',
      600: '#8079b9',
      700: '#666194',
      800: '#4c486f',
      900: '#3b3856',
    },
    midnightBlue: {
      50: '#e8eaf3',
      100: '#dcdfed',
      200: '#b7bdda',
      300: '#162b87',
      400: '#14277a',
      500: '#12226c',
      600: '#112065',
      700: '#0d1a51',
      800: '#0a133d',
      900: '#080f2f',
    },
    limeGreen: {
      50: '#fafdf6',
      100: '#f8fcf1',
      200: '#f1f9e2',
      300: '#d1eda0',
      400: '#bcd590',
      500: '#a7be80',
      600: '#9db278',
      700: '#7d8e60',
      800: '#5e6b48',
      900: '#495338',
    },
    blue: {
      50: '#f4fbff',
      100: '#eff9ff',
      200: '#ddf4ff',
      300: '#92daff',
      400: '#83c4e6',
      500: '#75aecc',
      600: '#6ea4bf',
      700: '#588399',
      800: '#426273',
      900: '#334c59',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: { Button },
});

export const globalStyles = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    // background: #444444;
    border-radius: 2.5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    // background: #2df8c7;
    border-radius: 2.5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    // background: #1f7165;
  }
  body {
    // scrollbar-color: #2df8c7 #444444;
    ::-webkit-scrollbar-track {
      // background: #444444;
      border-radius: 0px;
    }
    overflow-y: auto;
    // background: #111312;
    overflow-x: hidden;
  }
  html,
  #__next {
    height: 100%;
  }
`;
