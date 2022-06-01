import React, { HTMLAttributes } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { allColorsAtom, currentTwColorAtom } from '@/store/store';
import { ValueWithCopy } from '@/components/UI/ValueWithCopy';
import { classNames } from '@/utils/classnames';
import { isLightColor } from '@/utils/colors';
import { useUpdateAtom } from 'jotai/utils';

function Row({ groupName, className }: { groupName: string; } & HTMLAttributes<HTMLDivElement>) {
    const allColors = useAtomValue(allColorsAtom);
    const values = Object.entries(allColors[groupName]);
    const setTwColor = useUpdateAtom(currentTwColorAtom);
    return (
        <div className={classNames("grid grid-cols-10 justify-end text-xs", className)}>
            {values.map(([key, color], idx) => (
                <div
                    // className="pr-1 w-8 sm:w-10 h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    // className="pr-1 min-w-[2.5rem] h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    // className="pr-1 w-10 h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    // className="pr-1 w-[minmax(2.5rem,auto)] h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    // className="pr-1 w-[clamp(2.5rem,auto,5rem)] h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    // className="pr-1 min-w-[2rem] max-w-[2.5rem] h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    // className="pr-1 min-w-[2rem] w-10 h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    className="pr-1 min-w-[2rem] h-16 cursor-pointer active:scale-y-[.97] flex items-end justify-end"
                    style={{ backgroundColor: color }}
                    onClick={() => setTwColor((v) => v && { group: v.group, key, value: color })}
                    key={idx}
                >
                    <div style={{ color: isLightColor(color) ? 'black' : 'white' }}>{key}</div>
                </div>
            ))}
        </div>
    );
}

export function TwColorInfo({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const [currentTwColor] = useAtom(currentTwColorAtom);
    return (
        <div className={classNames("p-4", className)} {...rest}>

            <div className="mb-4 text-center">
                {currentTwColor ? `Palette: ${currentTwColor.group}` : "Pick a color from the grid"}
            </div>

            <div className="flex items-center space-x-4 text-sm">
                <div
                    className="flex-none w-24 h-16 border-primary-400 border rounded"
                    style={{ backgroundColor: currentTwColor?.value || 'transparent' }}
                />

                {currentTwColor
                    &&
                    <div className="flex-1 flex items-center justify-between">
                        
                        <div className="">
                            <div className="">
                                {currentTwColor.group}.{currentTwColor.key}:
                            </div>
                            <ValueWithCopy colorValue={currentTwColor.value.toUpperCase()} />
                        </div>

                        {/* <Row className="justify-self-end" groupName={currentTwColor.group} /> */}
                        <Row className="flex-1" groupName={currentTwColor.group} />
                    </div>
                }
            </div>


        </div>
    );
}
