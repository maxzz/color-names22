import React, { Fragment } from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '../../../store/store';
import { formatHSL, } from '../../../utils/colors';
import { classNames } from '../../../utils/classnames';
import { ColorListInfoPanel } from './ColorListInfoPanel';

function List() {
    const colorList = useAtomValue(viewListAtoms.colorListAtom);
    return (
        <div className="grid grid-cols-[auto,auto,8rem,auto,minmax(20px,1fr)] gap-x-2">
            {colorList.map((color, idx) => (
                <Fragment key={color.name}>
                    <div className="text-xs leading-5 front-mono text-right">{idx}</div>
                    <div className="text-xs leading-5 front-mono">{color.hex}</div>
                    <div className="text-xs leading-5 front-mono">{formatHSL(color.hsl)}</div>
                    <div className="text-sm">{color.name}</div>
                    <div style={{ backgroundColor: color.name }} />
                </Fragment>
            ))}
        </div>
    );
}

export function Section2_ColorsList({ className }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className={classNames("flex flex-col bg-primary-100 overflow-hidden", className)}>
            <ColorListInfoPanel />
            <div className="h-full overflow-overlay">
                <div className="pl-4 pr-8 py-4 lg:pl-12 lg:pr-16 xl:pl-16 xl:pr-20 2xl:pl-[9rem] 2xl:pr-[12rem]">
                    <List />
                </div>
            </div>
        </div>
    );
}

//TODO: color index and sorted map indices are now different but should be preserved or removed at all.

//scrollbar-gutter: stable both-edges
//font-size: calc(16px + (32 - 16) * (100vw - 320px) / (1280 - 320)); //https://codepen.io/jkantner/pen/eYygqJm
//dark/light https://codepen.io/jkantner/pen/eYygqJm