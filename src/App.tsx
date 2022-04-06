import './App.css';
import { Header } from './components/Header';
import { MainBody } from './components/MainBody';

function App() {
    return (
        <div className="h-screen bg-orange-50">
            <Header />
            <MainBody />
        </div>
    );
}

export default App;
