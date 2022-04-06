import React from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { globalColorAtom, hueAtom, toleranceAtom } from '../store/store';

function HueInfo() {
    const hue = useAtomValue(hueAtom);
    const [tolerance] = useAtom(toleranceAtom);
    return (
        <div className="flex space-x-2">
            <div className="">Hue: {hue}</div>
            <div className="">Tolerance: {tolerance}</div>
        </div>
    );
}

function ColorPreview() {
    const color = useAtomValue(globalColorAtom);
    const borderColor = () => color ? color.type === 'dark' ? 'white' : 'black' : 'transparent';
    return (
        <div
            className="w-20 h-20 border flex items-center justify-center"
            style={{
                backgroundColor: `${color ? color.hex : 'transparent'}`,
                color: borderColor(),
                borderColor: borderColor()
            }}
        >
            Test
        </div>
    );
}

function ColorInfo() {
    const color = useAtomValue(globalColorAtom);
    return (<>
        {color &&
            <div className="grid grid-cols-[auto,1fr] gap-x-2">
                <div className="select-none">Name</div>
                <div className="">{color.name}</div>
                <div className="select-none">Hex</div>
                <div className="">{color.hex}</div>
                <div className="select-none">RGB</div>
                <div className="">{`rgb(${color.rgb.join(', ')})`}</div>
                <div className="select-none">HSL</div>
                <div className="">{`hsl(${color.hsl.join(', ')})`}</div>
            </div>
        }
    </>);
}

export function ColorInfoPanel() {
    return (
        <div className="px-4 flex items-end justify-between">
            <div className="flex space-x-4 text-sm">
                <ColorPreview />
                <ColorInfo />
            </div>
            <HueInfo />
        </div>
    );
}

//TODO: add tailwind palettes
