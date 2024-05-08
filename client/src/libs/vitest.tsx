/* eslint-disable import/no-extraneous-dependencies */
// built-ins
import { BrowserRouter, Router } from 'react-router-dom'; // Updated import
import { act, render as rtlRender } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';

// material ui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// types
import type { Theme } from '@mui/material';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { RenderOptions as RTLRenderOptions } from '@testing-library/react';

// helpers
import configureStore from '~helpers/configureStore';

// configs
import rootReducer from '~configs/store/rootReducer';
import rootSaga from '~configs/store/rootSaga';
import appTheme from '~configs/theme';

export interface RenderOptions extends Omit<RTLRenderOptions, 'wrappers'> {
  theme?: Theme;
  store?: ToolkitStore;
  router?: any; // Change the type to any or adjust based on your new router setup.
}

const render = async (
  component?: JSX.Element,
  {
    theme = appTheme,
    store = configureStore({ reducer: rootReducer, sagaActionWatcher: rootSaga }),
    router = component ? Router :  Router ,
    ...options
  }: RenderOptions = {} as RenderOptions
) => {
  return act(() =>
    rtlRender(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter> {/* Change to BrowserRouter */}
            
          </BrowserRouter>
        </Provider>
      </ThemeProvider>,
      options
    )
  );
};

export const userEvent = user;
export * from '@testing-library/react';
export * from 'vitest';

export default render;
