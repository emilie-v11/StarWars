import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {} from 'react-bootstrap';
import Header from './components/Header/Header';
import Index from './pages/Homepage/Index';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter className="container my-4">
            <Header title={'Starwars characters'} />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/people/:id" element={<Details />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
