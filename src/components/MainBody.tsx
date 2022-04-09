import { useAtomValue } from 'jotai';
import { colorListSortByAtom } from '../store/store';
import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';
import { ColorsList } from './ColorsList';
import { HueSlider } from './HueSlider/HueSlider';
import { MonochromeSwitch } from './MonochromeSwitch';


export function MainBody() {
    useAtomValue(colorListSortByAtom);
    return (
        <div className="">
            <ColorsList />
            
            <div className="px-4 mt-8 text-xl font-header border-slate-700 border-b">Section two: sorted groups</div>

            <div className="mt-4 grid gap-4">
                <ColorInfoPanel />
                <div className="px-4">
                    <div className="">
                        <HueSlider />
                        <MonochromeSwitch />
                    </div>
                </div>
                <ColorNeighbors />
            </div>
        </div>
    );
}
