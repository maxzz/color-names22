import React, { ChangeEvent, Fragment } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { colorListAtom, colorListSortByAtom } from '../../../store/store';
import { formatHSL, SortBy } from '../../../utils/colors';
import { classNames } from '../../../utils/classnames';

export function SortOrderSwitch({className}: React.HTMLAttributes<HTMLUListElement>) {
    const [sortBy, setSortBy] = useAtom(colorListSortByAtom);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setSortBy(+event.target.value);
    return (
        <ul className={classNames("flex items-center space-x-2", className)}>
            <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.none} value={SortBy.none} name="sortby" />none</label>
            <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.name} value={SortBy.name} name="sortby" />name</label>
            <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.rgb} value={SortBy.rgb} name="sortby" />rgb</label>
            <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.hsl} value={SortBy.hsl} name="sortby" />hsl</label>
        </ul>
    );
}

function List() {
    const colorList = useAtomValue(colorListAtom);
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

export function ColorsList({className}: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className={classNames("space-y-4", className)}>
            <List />
        </div>

    );
}
