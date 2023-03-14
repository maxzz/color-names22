import React, { HTMLAttributes } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { allColorsAtom, CurrentTwColor, currentTwColorAtom } from '@/store/store';
import { ValueWithCopy } from '@/components/UI/ValueWithCopy';
import { classNames } from '@/utils/classnames';
import { isLightColor } from '@/utils-color';
import useMeasure from 'react-use-measure';

function PreviewBox() {
    const currentTwColor = useAtomValue(currentTwColorAtom);
    return (
        <div
            className="flex-none w-24 h-16 border-primary-400 border rounded flex items-end justify-end"
            style={{ backgroundColor: currentTwColor?.value || 'transparent' }}
        >
            {currentTwColor &&
                <div className="pr-1" style={{ color: isLightColor(currentTwColor.value) ? 'black' : 'white' }}>
                    {currentTwColor.key}
                </div>
            }
        </div>
    );
}

function SelectedColorValue({ currentTwColor }: { currentTwColor: CurrentTwColor | null; }) {
    return (
        <div className="flex items-center">
            {currentTwColor && <>
                <ValueWithCopy copyValue={currentTwColor.value.toUpperCase()} />
            </>}
        </div>
    );
}

function RowPalette({ groupName, className }: { groupName: string; } & HTMLAttributes<HTMLDivElement>) {
    const allColors = useAtomValue(allColorsAtom);
    const values = Object.entries(allColors[groupName]);
    const setTwColor = useSetAtom(currentTwColorAtom);
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

export function TwColorInfoContainer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const currentTwColor = useAtomValue(currentTwColorAtom);
    const [ref, { width: containerWidth }] = useMeasure();
    return (
        <div ref={ref} className={classNames("p-4", className)} {...rest}>

            {/* Palette name */}
            <div className="mb-4 text-center">
                {currentTwColor ? `Palette: ${currentTwColor.group}` : "Pick a color from the grid"}
            </div>

            {/* Low container */}
            <div className="flex items-start justify-between space-x-4 text-sm">

                {/* Preview and color value */}
                <div className={classNames("flex", containerWidth < 700 ? 'flex-col space-x-0' : 'flex-row space-x-2', )}>
                    <PreviewBox />
                    <SelectedColorValue currentTwColor={currentTwColor} />
                </div>

                {/* Row */}
                <div className="flex-1 max-w-[400px]">
                    {currentTwColor &&
                        <RowPalette groupName={currentTwColor.group} />
                    }
                </div>
            </div>

        </div>
    );
}
