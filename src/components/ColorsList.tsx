import React, { ChangeEvent, Fragment } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { colorListAtom, colorListSortByAtom } from '../store/store';
import { formatHSL, SortBy } from '../utils/colors';

export function ColorsList() {
    const colorList = useAtomValue(colorListAtom);
    const [sortBy, setSortBy] = useAtom(colorListSortByAtom);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setSortBy(+event.target.value);
    return (
        <div className="space-y-4">
            <div className="px-4 border-slate-700 border-b flex items-center justify-between space-x-4">
                <div className="text-xl font-header">Section one: colors list</div>
                {/* <ul className="flex items-center space-x-2" onChange={(event) => setSortBy(+(event.target as HTMLInputElement).value)}> */}
                <ul className="flex items-center space-x-2">
                    <label className="flex items-center"><input className="mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.none} value={SortBy.none} name="sortby" />none</label>
                    <label className="flex items-center"><input className="mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.name} value={SortBy.name} name="sortby" />name</label>
                    <label className="flex items-center"><input className="mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.rgb} value={SortBy.rgb} name="sortby" />rgb</label>
                    <label className="flex items-center"><input className="mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.hsl} value={SortBy.hsl} name="sortby" />hsl</label>
                </ul>
            </div>
            <div className="px-4 grid grid-cols-[8rem,auto,1fr] gap-x-2">
                {colorList.map((color) => (
                    <Fragment key={color.name}>
                        <div className="" style={{ backgroundColor: color.name }} />
                        <div className="text-xs leading-5 front-mono">{formatHSL(color.hsl)}</div>
                        <div className="text-sm">{color.name}</div>
                    </Fragment>
                ))}
            </div>
        </div>

    );
}
