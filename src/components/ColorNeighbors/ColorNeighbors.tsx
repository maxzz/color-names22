import React from 'react';
import { useAtom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { globalColorAtom, colorGroupsAtom } from '../../store/store';
import './ColorNeighbors.scss';

export function ColorNeighbors() {
    const [colorsGroups] = useAtom(colorGroupsAtom);
    const setGlobalColor = useUpdateAtom(globalColorAtom);
    return (
        <div className="place-self-center relative w-1/2 max-w-[42rem] aspect-square">
            <div className="w-full h-full grid border border-slate-200 shadow-md">
                {colorsGroups.map((group, groupIdx) => (
                    <div className="grid grid-flow-col" key={groupIdx}>
                        {group.map((color, colorIdx) => (
                            <button
                                className="hover:scale-[1.02] hover:shadow-md hover:border-slate-500 hover:border transition-transform"
                                style={{
                                    backgroundColor: color.name,
                                    color: color.dark ? 'white' : 'black',
                                }}
                                key={colorIdx}
                                onClick={() => setGlobalColor(color)}
                            >
                                {color.name}
                            </button>
                        ))}
                    </div >
                ))}
            </div>
            <div className="axis axis-lightness">lightness</div>
            <div className="axis axis-saturation">saturation</div>
        </div>
    );
}
