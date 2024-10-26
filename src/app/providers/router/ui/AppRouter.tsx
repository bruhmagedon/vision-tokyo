import BaseLayout from 'app/layout/BaseLayout';
import { MainPage } from 'pages/MainPage/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const appRouter = createBrowserRouter([
    {
        element: <BaseLayout />,
        // errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <MainPage /> },
            // { path: "/movie/:id", element: <MoviePage /> }
        ],
    },
]);
