import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';
import { queryClient } from './queries/index.js';
import { ErrorBoundary } from './components/layout/ErrorBoundary/index.jsx';
import { GlobalStyles } from './styles/global.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
