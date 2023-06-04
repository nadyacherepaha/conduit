import React, { FC, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getUserInfo, selectUser } from './redux/reducers/authReducer';
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

export const AppInit: FC = () => {
    const isUser = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        isUser && dispatch(getUserInfo());
    }, [isUser]);

    return (
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
    );
};
