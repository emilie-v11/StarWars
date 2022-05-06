import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {} from 'react-bootstrap';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="container my-4">
            <Header title={'Starwars characters'} />
        </div>
    );
}

export default App;
