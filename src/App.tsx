import React from 'react';
import '@homework-task/styles.css';

import PageGenerator from '@homework-task/components/PageGenerator';
import { QueryClient, QueryClientProvider } from 'react-query';

// config for page
import { PageConfig } from '@homework-task/pageConfig';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PageGenerator data={PageConfig} />
        </QueryClientProvider>
    );
}

export default App;
