import React from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '../../../store';
import { classNames } from '../../../utils/classnames';
import { ColorInfoPanel } from './1-selected-color';
import { ColorNeighbors } from './2-color-neighbors';

export function Section1_ColorsByHue({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
    useAtomValue(viewListAtoms.sortByAtom);
    return (
        <div className={classNames("flex flex-col", className)} {...rest}>
            <ColorInfoPanel />
            <div className="flex-1 p-4 grid place-items-center">
                <ColorNeighbors />
            </div>
        </div>
    );
}
