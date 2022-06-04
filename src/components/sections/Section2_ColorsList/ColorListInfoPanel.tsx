import { viewListAtoms } from '@/store/store';
import { classNames } from '@/utils/classnames';
import { SortBy } from '@/utils/colors';
import { useAtom } from 'jotai';
import React, { ChangeEvent } from 'react';

export function SortOrderSwitch({className}: React.HTMLAttributes<HTMLUListElement>) {
    const [sortBy, setSortBy] = useAtom(viewListAtoms.sortByAtom);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setSortBy(+event.target.value);
    return (
        <ul className={classNames("flex items-center space-x-2", className)}>
            {/* <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.none} value={SortBy.none} name="sortby" />none</label> */}
            <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.name} value={SortBy.name} name="sortby" />name</label>
            <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.rgb} value={SortBy.rgb} name="sortby" />rgb</label>
            <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.hsl} value={SortBy.hsl} name="sortby" />hsl</label>
        </ul>
    );
}

export function ColorListInfoPanel() {
    return (
        <div className="bg-primary-200">
            <div className="mt-8 px-4 border-slate-700 border-b flex items-center justify-center space-x-4">
                <SortOrderSwitch className="p-4" />
            </div>
        </div>
    );
}
