import React from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '../../../store/store';
import { classNames } from '../../../utils/classnames';
import { ColorInfoPanel, HueInfo } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';

export function Section1_ColorsByHue({ className }: React.HTMLAttributes<HTMLUListElement>) {
    useAtomValue(viewListAtoms.sortByAtom);
    return (
        <div className={classNames("mt-4 flex flex-col", className)}>
            <ColorInfoPanel />

            <div className="flex-1 p-4 grid place-items-center">
                <ColorNeighbors />
            </div>
        </div>
    );
}
