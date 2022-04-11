import { useAtomValue } from 'jotai';
import { colorListSortByAtom } from '../store/store';
import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';
import { MonochromeSwitch } from './MonochromeSwitch';

import { ColorsList } from './ColorsList';

import { UISwitch } from './UI/UISwitch';
import { UISwitchCheck } from './UI/UISwitchCheck';
import { UISwitchRadio } from './UI/UISwitchRadio';


export function MainBody() {
    useAtomValue(colorListSortByAtom);
    return (
        <div className="">
            {/* <div className="px-4 flex space-x-4">
                <UISwitch />
                <UISwitchCheck />
                <UISwitchRadio />
            </div> */}
            {/* <ColorsList /> */}

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
