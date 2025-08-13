import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/router';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import '@/App.css';

function App() {
    return (
        <Suspense fallback={ <LoaderSpinner /> }>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
