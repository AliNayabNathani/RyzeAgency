import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: props => ({
      body: {
        backgroundColor: '#07041c',
        fontFamily: "'Rubik', sans-serif",
      },
    }),
  },
});

export default theme;
