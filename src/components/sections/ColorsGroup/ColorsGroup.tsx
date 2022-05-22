import React from 'react';
import { useAtomValue } from 'jotai';
import { colorListSortByAtom } from '../../../store/store';
import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';
import { MonochromeSwitch } from './MonochromeSwitch';

export function ColorsGroup() {
    useAtomValue(colorListSortByAtom);
    return (
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
    );
}
