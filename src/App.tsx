import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import { FullPageErrorFallback } from './components/lib';

import { List } from './components/List';
import { GlobalStyles } from './styles/global';

const App: React.FC = () => {
    return (
        <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
            <GlobalStyles />
            <List />
        </ErrorBoundary>
    )
}

export default App;
