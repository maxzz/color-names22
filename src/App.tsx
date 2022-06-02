import { useAtomValue } from 'jotai';
import { dataLoadAtom } from './store/store';
import { TailwindColorsBridge } from './components/UI/TailwindColorsBridge';
import { App1_Header } from './components/App1_Header';
import { App2_Main } from './components/App2_Main';
import { App3_Footer } from './components/App3_Footer';
import { classNames } from './utils/classnames';
import './App.scss';

const headerShadow1 = "shadow-[1px_0px_3px_0px__#000]";
const headerShadow2 = "shadow-[1px_0px_3px_0px__#000]";
const headerShadow3 = "shadow-[0px_1px_2px_1px_#ffc16d69]";
const headerShadowStyle = { boxShadow: '#bfbfbf75 2px 0px 3px 0px', };

function App() {
    useAtomValue(dataLoadAtom);
    return (<>
        <TailwindColorsBridge />
        <div className="h-screen flex flex-col md:flex-row bg-slate-50">
            <App1_Header className="md:w-80 lg:w-[33rem] transition-all" />
            {/* <App1_Header className={classNames("md:w-80 lg:w-[33rem] transition-all", headerShadow1)} /> */}
            {/* <App1_Header className={classNames("md:w-80 lg:w-[33rem] transition-all")} style={headerShadowStyle} /> */}

            <div className="flex-1 flex flex-col overflow-hidden">
                <App2_Main className="flex-1" />
                <div className="md:hidden">
                    <App3_Footer />
                </div>
            </div>
        </div>
    </>);
}

export default App;
