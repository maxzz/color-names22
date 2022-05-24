import React from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '../../../store/store';
import { classNames } from '../../../utils/classnames';
import { ColorInfoPanel, HueInfo } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';
import { UISwitch } from '../../UI/UiSwitch';

export function Section1_ColorsByHue({ className }: React.HTMLAttributes<HTMLUListElement>) {
    useAtomValue(viewListAtoms.sortByAtom);
    const [on, setOn] = React.useState(false);
    const [on2, setOn2] = React.useState(false);
    return (
        <div className={classNames("mt-4 grid gap-4", className)}>
            <ColorInfoPanel />

            <div className="px-4">
                <div className="flex flex-col">
                    <div className="mb-2 self-end flex items-center space-x-2">
                        <div className="">Monochrome</div>
                        <UISwitch value={on2} onChange={setOn2} />
                    </div>
                    <HueSlider />
                    <HueInfo className="self-end" />
                </div>
            </div>
            <div className="p-4 grid place-items-center">
                <ColorNeighbors />
            </div>
        </div>
    );
}
