import { useAtomValue } from 'jotai';
import { colorListSortByAtom } from '../store/store';
import { ColorInfoPanel } from './sections/ColorsGroup/ColorInfoPanel';
import { ColorNeighbors } from './sections/ColorsGroup/ColorNeighbors/ColorNeighbors';
import { HueSlider } from './sections/ColorsGroup/HueSlider/HueSlider';
import { MonochromeSwitch } from './sections/ColorsGroup/MonochromeSwitch';

import { ColorsList } from './sections/ColorsList/ColorsList';
import { Experiments } from './UI/experiments/Experiments';

export function MainBody() {
    useAtomValue(colorListSortByAtom);
    return (
        <div className="">
            {/* <Experiments /> */}

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
                <div className="p-4 grid place-items-center">
                    <ColorNeighbors />
                </div>
            </div>
        </div>
    );
}
