import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout/Layout";

const HomePage = lazy(() => import('@/pages/Homepage/Index'));
const Details = lazy(() => import('@/pages/Details/Details'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
]);
export default router;