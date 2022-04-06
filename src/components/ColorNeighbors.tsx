import React from 'react';
import { useAtom } from 'jotai';
import { globalColorAtom, colorGroupsAtom } from '../store/store';

export function ColorNeighbors() {
    const [colorsGroups] = useAtom(colorGroupsAtom);
    const [globalColor, setGlobalColor] = useAtom(globalColorAtom);
    return (
        <div className="place-self-center w-1/2 max-w-[42rem] aspect-square grid border border-slate-200 shadow-md">
            {colorsGroups.map((group, groupIdx) => (
                <div className="grid grid-flow-col" key={groupIdx}>
                    {group.map((color, colorIdx) => (
                        <button
                            className="hover:scale-[1.02] hover:shadow-md"
                            style={{
                                backgroundColor: color.name,
                                color: color.type === 'light' ? 'black' : 'white'
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
    );
}
