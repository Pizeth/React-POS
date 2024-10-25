import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#4abd89',
        },
        error: {
            main: '#f44336',
        },
        common: {
            white: '#ffffff',
        },
        secondary: {
            main: '#3ac46e',
        },
    },
    spacing: 8,
});