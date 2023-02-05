import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import setupStore from './redux/store/store';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
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
import { Provider } from 'react-redux';
import SignUpPage from './pages/sign-up-page/SignUpPage';
import SignInPage from './pages/sign-in-page/SignInPage';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App: FC = () => {
  const store = setupStore();

  return (
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Header/>
            <Routes>
              <Route path={homePath} element={<HomePage/>}/>
              <Route path={loginPath} element={<SignInPage/>}/>
              <Route path={registerPath} element={<SignUpPage/>}/>
              <Route path={editorPath} element={<HomePage/>}/>
              <Route path={profilePath} element={<HomePage/>}/>
              <Route path={settingsPath} element={<HomePage/>}/>
            </Routes>
            <Footer/>
          </Router>
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
