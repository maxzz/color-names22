import React, { ChangeEvent, Fragment } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { viewListAtoms } from '../../../store/store';
import { formatHSL, SortBy } from '../../../utils/colors';
import { classNames } from '../../../utils/classnames';

function List() {
    const colorList = useAtomValue(viewListAtoms.colorListAtom);
    return (
        <div className="px-4 grid grid-cols-[8rem,auto,1fr] gap-x-2">
            {colorList.map((color) => (
                <Fragment key={color.name}>
                    <div className="text-xs leading-5 front-mono">{formatHSL(color.hsl)}</div>
                    <div className="text-sm">{color.name}</div>
                    <div className="" style={{ backgroundColor: color.name }} />
                </Fragment>
            ))}
        </div>

    );
}

export function Section3_Tailwind({className}: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className={classNames("space-y-4", className)}>
            {/* <List /> */}
        </div>
    );
}
