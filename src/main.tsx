import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import setupStore from './redux/store/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
    homePath,
    settingsPath,
    loginPath,
    registerPath,
    editorPath,
    profilePath,
} from './constants/navbar';
import './styles/main.module.scss';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

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
                        <Header />
                        <Routes>
                            <Route path={homePath} element={<Home />} />
                            <Route path={loginPath} element={<SignIn />} />
                            <Route path={registerPath} element={<SignUp />} />
                            <Route path={editorPath} element={<Home />} />
                            <Route path={profilePath} element={<Home />} />
                            <Route path={settingsPath} element={<Home />} />
                        </Routes>
                        <Footer />
                    </Router>
                </QueryClientProvider>
            </Provider>
        </StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
