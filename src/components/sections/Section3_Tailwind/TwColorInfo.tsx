import React from 'react';
import { currentTwColorAtom } from '@/store/store';
import { useAtom } from 'jotai';
import { ValueWithCopy } from '@/components/UI/ValueWithCopy';

export function TwColorInfo() {
    const [currentTwColor] = useAtom(currentTwColorAtom);
    return (
        <div className="p-4 h-24 bg-primary-700">
            {currentTwColor &&
                <div className="flex">
                    <div className="w-16 h-16" style={{ backgroundColor: currentTwColor.value }}></div>
                    <ValueWithCopy colorValue='22'  />
                    <div className="">{currentTwColor.group}.{currentTwColor.key}</div>
                    <div className=""></div>
                </div>
            }
        </div>
    );
}
