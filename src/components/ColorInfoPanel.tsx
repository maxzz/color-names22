import { useAtom, useAtomValue } from 'jotai';
import React from 'react';
import { hueAtom, toleranceAtom } from '../store/store';

export function ColorInfoPanel() {
    const hue = useAtomValue(hueAtom);
    const [tolerance] = useAtom(toleranceAtom);
    return (
        <div className="text-sm">
            <div className="">Hue: {hue}</div>
            <div className="">Tolerance: {tolerance}</div>
        </div>
    );
}
