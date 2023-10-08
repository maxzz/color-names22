import { Fragment } from 'react';
import { useAtomValue } from 'jotai';
import { viewListAtoms } from '@/store';
import { formatHSL, } from '@/utils-color';

export function ColorNamesList() {
    const colorList = useAtomValue(viewListAtoms.colorListAtom);
    return (
        <div className="grid grid-cols-[auto,auto,8rem,auto,minmax(20px,1fr)] gap-x-2">
            {colorList.map((color, idx) => (
                <Fragment key={color.name}>
                    <div className="text-xs leading-5 front-mono text-right">{idx}</div>
                    <div className="text-xs leading-5 front-mono">{color.hex}</div>
                    <div className="text-xs leading-5 front-mono">{formatHSL(color.hsl)}</div>
                    <div className="text-sm">{color.name}</div>
                    <div style={{ backgroundColor: color.name }} />
                </Fragment>
            ))}
        </div>
    );
}
