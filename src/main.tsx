import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const App: FC = () => {
  return <h1>Welcome</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));
