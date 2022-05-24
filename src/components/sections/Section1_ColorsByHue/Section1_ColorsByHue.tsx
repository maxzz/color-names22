import React from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '../../../store/store';
import { classNames } from '../../../utils/classnames';
import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';
import { MonochromeSwitch } from './MonochromeSwitch';
import { UISwitch } from '../../UI/UiSwitch';

export function Section1_ColorsByHue({ className }: React.HTMLAttributes<HTMLUListElement>) {
    useAtomValue(viewListAtoms.sortByAtom);
    const [on, setOn] = React.useState(false);
    return (
        <div className={classNames("mt-4 grid gap-4", className)}>
            <ColorInfoPanel />
            <div className="px-4">
                <div className="">
                    <HueSlider />
                    <UISwitch value={on} onChange={() => setOn((v) => !v)}>11</UISwitch>
                    <MonochromeSwitch />
                </div>
            </div>
            <div className="p-4 grid place-items-center">
                <ColorNeighbors />
            </div>
        </div>
    );
}
