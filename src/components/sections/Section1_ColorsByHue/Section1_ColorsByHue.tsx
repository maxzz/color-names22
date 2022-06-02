import React from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '../../../store/store';
import { classNames } from '../../../utils/classnames';
import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';

export function Section1_ColorsByHue({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
    useAtomValue(viewListAtoms.sortByAtom);
    return (
        <div className={classNames("flex flex-col pattern", className)} {...rest}>
            <ColorInfoPanel />
            <div className="flex-1 p-4 grid place-items-center">
                <ColorNeighbors />
            </div>
        </div>
    );
}
