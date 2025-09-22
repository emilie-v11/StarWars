import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/Layout/MainLayout";

const HomePage = lazy(() => import('@/pages/Homepage/Index'));
const Details = lazy(() => import('@/pages/Details/Details'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/people/:id',
                element: <Details />,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
export default router;