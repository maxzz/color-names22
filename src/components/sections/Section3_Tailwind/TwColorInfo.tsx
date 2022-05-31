import React from 'react';
import { currentTwColorAtom } from '@/store/store';
import { useAtom } from 'jotai';
import { ValueWithCopy } from '@/components/UI/ValueWithCopy';

export function TwColorInfo() {
    const [currentTwColor] = useAtom(currentTwColorAtom);
    return (
        <div className="p-4 h-24 bg-primary-300">
            {currentTwColor &&
                <div className="flex items-center space-x-4">
                    <div className="w-24 h-16 border-primary-400 border rounded" style={{ backgroundColor: currentTwColor.value }}></div>
                    
                    <div className="flex items-center text-sm">
                        <div className="">{currentTwColor.group}.{currentTwColor.key}:</div>
                        <ValueWithCopy colorValue={currentTwColor.value.toUpperCase()} />
                    </div>
                </div>
            }
        </div>
    );
}
