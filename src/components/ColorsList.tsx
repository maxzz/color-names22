import { useAtom, useAtomValue } from 'jotai';
import React from 'react';
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
            {colorList.map((color) => (
                <div
                    className=""
                    style={{ backgroundColor: color.name }}
                    key={color.name}
                >{color.name}</div>
            ))}
        </div>

    );
}
