import React, { ChangeEvent } from 'react';
import { useAtom } from 'jotai';
import { viewListAtoms } from '@/store/store';
import { SortBy } from '@/utils/colors';
import { classNames } from '@/utils/classnames';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { RadioGroupItemProps, RadioGroupProps } from '@radix-ui/react-radio-group';

// function SortOrderSwitch({className}: React.HTMLAttributes<HTMLUListElement>) {
//     const [sortBy, setSortBy] = useAtom(viewListAtoms.sortByAtom);
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => setSortBy(+event.target.value);
//     return (
//         <ul className={classNames("flex items-center space-x-2", className)}>
//             {/* <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.none} value={SortBy.none} name="sortby" />none</label> */}
//             <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.name} value={SortBy.name} name="sortby" />name</label>
//             <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.rgb} value={SortBy.rgb} name="sortby" />rgb</label>
//             <label className="flex items-center"><input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.hsl} value={SortBy.hsl} name="sortby" />hsl</label>
//         </ul>
//     );
// }

// export function ColorListInfoPanel() {
//     return (
//         <div className="bg-primary-200">
//             <div className="mt-8 px-4 border-slate-700 border-b flex items-center justify-center space-x-4">
//                 <SortOrderSwitch className="p-4" />
//             </div>
//         </div>
//     );
// }

const Root = RadioGroupPrimitive.Root as React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps, 'value'> & { value: string | number | undefined; } & React.RefAttributes<HTMLDivElement>>;
const Item = RadioGroupPrimitive.Item as React.ForwardRefExoticComponent<Omit<RadioGroupItemProps, 'value'> & { value: string | number | undefined; } & React.RefAttributes<HTMLButtonElement>>;
const Indicator = RadioGroupPrimitive.Indicator;

function SortOrderSwitch({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const [sortBy, setSortBy] = useAtom(viewListAtoms.sortByAtom);
    const onChange = (v: string) => setSortBy(+v);
    return (
        <Root className={classNames("flex items-center space-x-2", className)} aria-label="Sort order" value={sortBy} onValueChange={onChange}>
            <label className="flex items-center">
                <Item className="w-4 h-4" value={SortBy.name}>
                    <Indicator className="inline-block bg-red-500 w-4 h-4" />
                </Item>
                Name
            </label>

            <label className="flex items-center">
                <Item className="w-4 h-4" value={SortBy.rgb}>
                    <Indicator className="inline-block bg-red-500 w-4 h-4" />
                </Item>
                RBG
            </label>

            <label className="flex items-center">
                <Item className="w-4 h-4" value={SortBy.hsl}>
                    <Indicator className="inline-block bg-red-500 w-4 h-4" />
                </Item>
                HSL
            </label>
        </Root>
    );
}

export function ColorListInfoPanel() {
    return (
        <div className="bg-primary-200">
            <div className="mt-8 text-center">The 147 color keywords defined in SVG plus one more, as defined in the CSS Color Module Level 4</div>
            <div className="px-4 border-slate-700 border-b flex items-center justify-center space-x-4">
                <SortOrderSwitch className="p-4" />
            </div>
        </div>
    );
}
