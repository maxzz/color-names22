import React from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { globalColorAtom, hueAtom, toleranceAtom } from '../store/store';

function HueInfo() {
    const hue = useAtomValue(hueAtom);
    const [tolerance] = useAtom(toleranceAtom);
    return (
        <div className="">
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
            <div className="">
                <div className="">Name: {color.name}</div>
                <div className="">Hex: {color.hex}</div>
                <div className="">RGB: {`rgb(${color.rgb.join(', ')})`}</div>
                <div className="">HSL: {`hsl(${color.hsl.join(', ')})`}</div>
            </div>
        }
    </>);
}

export function ColorInfoPanel() {
    return (
        <div className="p-2 flex space-x-4 text-sm">
            <HueInfo />
            <ColorPreview />
            <ColorInfo />
        </div>
    );
}
