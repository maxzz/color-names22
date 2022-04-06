import { useAtom, useAtomValue } from 'jotai';
import React from 'react';
import { globalColorAtom, hueAtom, toleranceAtom } from '../store/store';

export function ColorInfoPanel() {
    const hue = useAtomValue(hueAtom);
    const [tolerance] = useAtom(toleranceAtom);
    const color = useAtomValue(globalColorAtom);
    return (
        <div className="p-2 flex space-x-4 text-sm">
            <div className="">
                <div className="">Hue: {hue}</div>
                <div className="">Tolerance: {tolerance}</div>
            </div>
            <div className="w-20 h-20" style={{backgroundColor: `${color ? color.hex: 'transparent'}`}}></div>
            {color &&
                <div className="">
                    <div className="">{color.name}</div>
                    <div className="">{color.hex}</div>
                    <div className="">{`rgb(${color.rgb.join(', ')})`}</div>
                    <div className="">{`hsl(${color.hsl.join(', ')})`}</div>
                </div>
            }
        </div>
    );
}
