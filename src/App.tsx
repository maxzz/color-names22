import { AppHeader } from './components/App1Header';
import { MainBody } from './components/App2Frontpage';
import './App.scss';
import { AppFooter } from './components/App3Footer';

function App() {
    return (
        <div className="h-screen flex flex-col bg-orange-100">
            <AppHeader />
            <MainBody className="flex-1" />
            <AppFooter />
        </div>
    );
}

export default App;
