import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

const App: FC = () => {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
