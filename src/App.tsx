import { Header } from './components/Header';
import { MainBody } from './components/MainBody';
import './App.scss';

function App() {
    return (
        <div className="min-h-screen bg-orange-50">
            <Header />
            <MainBody />
        </div>
    );
}

export default App;
