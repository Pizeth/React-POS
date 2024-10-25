// import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Component/Style/Theme';
// ReactDOM.render(<AppRouter />,
//   document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ThemeProvider theme={theme}><AppRouter /></ThemeProvider>);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();