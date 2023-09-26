import { extendTheme } from '@chakra-ui/react';
import { bgSecondary } from './App';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    colors: {
        gray: {
            50: bgSecondary,
            100: bgSecondary,
            200: bgSecondary,
            300: bgSecondary,
            400: bgSecondary,
            500: bgSecondary,
            600: bgSecondary,
            700: bgSecondary,
            800: bgSecondary,
            900: bgSecondary,
        }
    },
});

export default theme;
