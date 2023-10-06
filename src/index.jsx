import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './templates/Home';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" Component={Home} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
