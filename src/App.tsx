import { App1_Header } from './components/App1_Header';
import { App2_Main } from './components/App2_Main';
import './App.scss';
import { App3_Footer } from './components/App3_Footer';
import { useAtomValue } from 'jotai';
import { dataLoadAtom } from './store/store';

function App() {
    useAtomValue(dataLoadAtom);
    return (
        <div className="h-screen flex flex-col bg-slate-50">
            <App1_Header />
            <App2_Main className="flex-1" />
            <App3_Footer />
        </div>
    );
}

export default App;
