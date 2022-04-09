import React, { Fragment } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { colorListAtom, colorListSortByAtom } from '../store/store';
import { SortBy } from '../utils/colors';

export function ColorsList() {
    const colorList = useAtomValue(colorListAtom);
    const [sortBy, setSortBy] = useAtom(colorListSortByAtom);
    return (
        <div className="">
            <div className="">
                <div className="">ColorsList</div>
                <ul className="flex items-center space-x-2">
                    <label><input className="mr-1" type="radio" value={SortBy.none} name="sortby" onChange={(event) => setSortBy(+event.target.value)} />none</label>
                    <label><input className="mr-1" type="radio" value={SortBy.name} name="sortby" onChange={(event) => setSortBy(+event.target.value)} />name</label>
                    <label><input className="mr-1" type="radio" value={SortBy.rgb} name="sortby" onChange={(event) => setSortBy(+event.target.value)} />rgb</label>
                    <label><input className="mr-1" type="radio" value={SortBy.hsl} name="sortby" onChange={(event) => setSortBy(+event.target.value)} />hsl</label>
                </ul>
            </div>
            <div className="grid grid-cols-[8rem,1fr]">
                {colorList.map((color) => (
                    <Fragment key={color.name}>
                        <div className="" style={{ backgroundColor: color.name }} />
                        <div className="h-16">{color.name}</div>
                    </Fragment>
                ))}
            </div>
        </div>

    );
}
