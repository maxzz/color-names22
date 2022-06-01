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

            {/* Palette name */}
            <div className="mb-4 text-center">
                {currentTwColor ? `Palette: ${currentTwColor.group}` : "Pick a color from the grid"}
            </div>

            {/* Low container */}
            <div className="flex items-start justify-between space-x-4 text-sm">

                {/* Preview and color value */}
                <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2">

                    {/* Preview box */}
                    <div
                        className="flex-none w-24 h-16 border-primary-400 border rounded"
                        style={{ backgroundColor: currentTwColor?.value || 'transparent' }}
                    />

                    {/* Color value */}
                    <div className="flex items-center">
                        {currentTwColor &&
                            <>
                                <div className="">
                                    {currentTwColor.group}.{currentTwColor.key}:
                                </div>
                                <ValueWithCopy colorValue={currentTwColor.value.toUpperCase()} />
                            </>
                        }
                    </div>
                </div>

                {/* Row */}
                <div className="flex-1 max-w-[400px]">
                    {currentTwColor &&
                        <Row className="" groupName={currentTwColor.group} />
                    }
                </div>
            </div>

        </div>
    );
}
