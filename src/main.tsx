import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home-page/HomePage';
import {
  homePath,
  settingsPath,
  loginPath,
  registerPath,
  editorPath,
  profilePath,
} from './constants/navbar';
import './styles/main.module.scss';

const App: FC = () => {
  return (
    <StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path={homePath} element={<HomePage />} />
          <Route path={loginPath} element={<HomePage />} />
          <Route path={registerPath} element={<HomePage />} />
          <Route path={editorPath} element={<HomePage />} />
          <Route path={profilePath} element={<HomePage />} />
          <Route path={settingsPath} element={<HomePage />} />
        </Routes>
      </Router>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
