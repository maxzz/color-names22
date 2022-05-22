import { AppHeader } from './components/App1Header';
import { MainBody } from './components/App2Frontpage';
import './App.scss';

function App() {
    return (
        <div className="h-screen flex flex-col bg-orange-100">
            <AppHeader />
            <MainBody />
        </div>
    );
}

export default App;
