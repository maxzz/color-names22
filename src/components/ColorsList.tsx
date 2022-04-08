import { useAtomValue } from 'jotai';
import React from 'react';
import { colorListAtom } from '../store/store';

export function ColorsList() {
    const colorList = useAtomValue(colorListAtom);
    return (
        <div className="">
            <div>ColorsList</div>
            {colorList.map((color) => (
                <div
                    className=""
                    style={{backgroundColor: color.name}}
                    key={color.name}
                >{color.name}</div>
            ))}
        </div>

    );
}
