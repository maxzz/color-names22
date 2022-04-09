import React, { Fragment } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { colorListAtom, colorListSortByAtom } from '../store/store';
import { formatHSL, SortBy } from '../utils/colors';

export function ColorsList() {
    const colorList = useAtomValue(colorListAtom);
    const [sortBy, setSortBy] = useAtom(colorListSortByAtom);
    return (
        <div className="space-y-4">
            <div className="px-4 border-slate-700 border-b flex items-center justify-between space-x-4">
                <div className="text-xl font-header">Colors list</div>
                <ul className="flex items-center space-x-2" onChange={(event) => setSortBy(+(event.target as HTMLInputElement).value)}>
                    <label className="flex items-center"><input className="mr-1" type="radio" value={SortBy.none} name="sortby" />none</label>
                    <label className="flex items-center"><input className="mr-1" type="radio" value={SortBy.name} name="sortby" />name</label>
                    <label className="flex items-center"><input className="mr-1" type="radio" value={SortBy.rgb} name="sortby" />rgb</label>
                    <label className="flex items-center"><input className="mr-1" type="radio" value={SortBy.hsl} name="sortby" />hsl</label>
                </ul>
            </div>
            <div className="px-4 grid grid-cols-[8rem,auto,1fr] gap-x-2">
                {colorList.map((color) => (
                    <Fragment key={color.name}>
                        <div className="" style={{ backgroundColor: color.name }} />
                        <div className=""><span className="text-xs front-mono">{formatHSL(color.hsl)}</span></div>
                        <div className="">{color.name}</div>
                    </Fragment>
                ))}
            </div>
        </div>

    );
}
