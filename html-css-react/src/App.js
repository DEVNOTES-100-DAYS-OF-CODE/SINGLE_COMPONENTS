import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './utills/history';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

import NavCondition from './components/Navigation/NavBarCondition';
import Glowing_Gradient_Loader from './components/Glowing_Gradient_Loader/Glowing_Gradient_Loader';
import Sun_Moon_Morph from './components/Sun_Moon_Morph/Sun_Moon_Morph';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'dark' ? darkMode : lightMode;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <div className='App'>
          <GlobalStyles />
          {/* <NavCondition toggleTheme={toggleTheme} /> */}
          {/* <Glowing_Gradient_Loader /> */}
          <Sun_Moon_Morph toggleTheme={toggleTheme} theme={theme} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
