import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "easter-egg",
        element: <h1>you found a nice easter egg there buddy</h1>
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
