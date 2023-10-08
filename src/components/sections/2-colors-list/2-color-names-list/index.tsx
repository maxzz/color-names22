import { Fragment } from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '@/store';
import { formatHSLMono } from '@/utils-color';

export function ColorNamesList() {
    const colorList = useAtomValue(viewListAtoms.colorListAtom);
    return (
        <div className="font-mono grid grid-cols-[auto,auto,auto,auto,minmax(20px,1fr)] gap-x-2">
            {colorList.map((color, idx) => (
                <Fragment key={color.name}>
                    <div className="px-1 text-xs leading-5 text-right bg-primary-200">{idx}</div>
                    <div className="text-xs leading-5">{color.hex}</div>
                    <div className="px-2 text-xs leading-5 whitespace-pre bg-primary-200">{formatHSLMono(color.hsl)}</div>
                    <div className="text-xs font-semibold">{color.name}</div>
                    <div style={{ backgroundColor: color.name }} />
                </Fragment>
            ))}
        </div>
    );
}
