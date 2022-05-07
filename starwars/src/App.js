import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {} from 'react-bootstrap';
import Header from './components/Header/Header';
import Index from './pages/Homepage/Index';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';
import { useEffect } from 'react';
import { getPeople } from './redux/actions/peopleAction';

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.people.isLoading);
    const currentPage = useSelector(state => state.people.currentPage);
    console.log(isLoading);
    console.log(currentPage);

    useEffect(() => {
        dispatch(getPeople());
    }, [dispatch]);

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
