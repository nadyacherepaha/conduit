import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import setupStore from './redux/store/store';
import './styles/main.module.scss';
import { AppInit } from './App';

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
                    <AppInit />
                </QueryClientProvider>
            </Provider>
        </StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
