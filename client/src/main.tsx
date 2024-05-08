// built-ins
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// material ui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
// styles
import './index.scss';

// configs
import store from '~configs/store';
import Notification from '~layouts/Notification';
import theme from '~configs/theme';
import { BrowserRouter } from 'react-router-dom';
// Register your router for maximum type safet


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App />
          <Notification />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
