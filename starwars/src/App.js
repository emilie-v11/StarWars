import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner';

const Index = lazy(() => import('./pages/Homepage/Index'));
const Details = lazy(() => import('./pages/Details/Details'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const renderLoader = () => <LoaderSpinner />;

function App() {
    return (
        <BrowserRouter className="container my-4">
            <Header title="Starwars characters" colorTitle="#FFC106" />
            <Suspense fallback={renderLoader()}>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/people/:id" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
