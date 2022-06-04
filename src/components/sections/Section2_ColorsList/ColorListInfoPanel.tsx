import React, { ChangeEvent } from 'react';
import { useAtom } from 'jotai';
import { viewListAtoms } from '@/store/store';
import { SortBy } from '@/utils/colors';
import { classNames } from '@/utils/classnames';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

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

const RadioGroup = RadioGroupPrimitive.Root;
const RadioGroupRadio = RadioGroupPrimitive.Item;
const RadioGroupIndicator = RadioGroupPrimitive.Indicator;


function SortOrderSwitch({ className }: React.HTMLAttributes<HTMLUListElement>) {
    const [sortBy, setSortBy] = useAtom(viewListAtoms.sortByAtom);
    const onChange = (v: string) => setSortBy(+v);
    return (
        <ul className={classNames("flex items-center space-x-2", className)}>

            <RadioGroup aria-label="Sort order" value={''+sortBy} onValueChange={onChange}>

                <label className="flex items-center">
                    {/* <input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.name} value={SortBy.name} name="sortby" /> */}

                    {/* <RadioGroupRadio value={''+SortBy.name} checked={sortBy === SortBy.name}> */}
                    <RadioGroupRadio className="w-4 h-4" value={''+SortBy.name}>
                        <RadioGroupIndicator className="inline-block bg-red-500 w-4 h-4" />
                    </RadioGroupRadio>
                    name

                </label>

                <label className="flex items-center">
                    {/* <input className="form-radio mr-1" type="radio" onChange={onChange} checked={sortBy === SortBy.name} value={SortBy.name} name="sortby" /> */}

                    {/* <RadioGroupRadio value={''+SortBy.rgb} checked={sortBy === SortBy.rgb}> */}
                    <RadioGroupRadio className="w-4 h-4" value={''+SortBy.rgb}>
                        <RadioGroupIndicator className="inline-block bg-red-500 w-4 h-4" />
                    </RadioGroupRadio>
                    rgb

                </label>

                {/* <Flex css={{ margin: '10px 0', alignItems: 'center' }}>

                    <RadioGroupRadio value="default" id="r1">
                        <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Label htmlFor="r1">Default</Label>
                </Flex>

                <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
                    <RadioGroupRadio value="comfortable" id="r2">
                        <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Label htmlFor="r2">Comfortable</Label>
                </Flex>

                <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
                    <RadioGroupRadio value="compact" id="r3">
                        <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Label htmlFor="r3">Compact</Label>
                </Flex> */}

            </RadioGroup>

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
