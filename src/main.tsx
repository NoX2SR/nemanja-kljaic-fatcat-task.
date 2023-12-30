import React from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { CreateForm } from './components/CreateForm.tsx';
import { ListComponent } from './components/ListComponent.tsx';
import { SimpleModal } from './components/SimpleDisplayModal.tsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <UnexistingErrorPage/> We can add error page for 404 and other errors.
    },
    {
        path: '/Task1',
        element: (
            <SimpleModal content="First task was to convert all project code into the TS. This could not be shown in the browser" />
        ),
    },
    {
        path: '/Task2',
        element: <ListComponent />,
    },
    {
        path: '/Task3',
        element: (
            <QueryClientProvider client={queryClient}>
                <CreateForm />
            </QueryClientProvider>
        ),
    },
    {
        path: '/Task4',
        element: (
            <SimpleModal
                content="Does the React Router counts? You just used it to come here and navigate your browser to other tasks. It does not have to stay in main.tsx. Project is small so I did't want to hide it in some other file. 
            Also, this text is an example of passing a specific property to the component."
            />
        ),
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
