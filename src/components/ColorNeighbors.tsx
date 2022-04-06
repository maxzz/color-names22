import React from 'react';
import { useAtom } from 'jotai';
import { colorGroupsAtom } from '../store/store';

export function ColorNeighbors() {
    const [colorsGroups] = useAtom(colorGroupsAtom);
    return (
        <div className="mx-auto w-1/2 aspect-square grid border border-slate-200 shadow-md">
            {colorsGroups.map((group, groupIdx) =>
                <div className="grid grid-flow-col row" key={groupIdx}>
                    {
                        group.map((color, colorIdx) =>
                            <button
                                className="color-button"
                                style={{
                                    backgroundColor: color.name,
                                    color: color.type === 'light' ? 'black' : 'white'
                                }}
                                key={colorIdx}
                            >
                                {color.name}
                            </button>
                        )
                    }

                    {/* <button key="index"
                    :style="{backgroundColor: color.name, color: color.type === 'light' ? 'black' : 'white'}"

                    class="color-button"
                    @click="setCurrentColor(color)">

                    {{ color.name }}
                </button> */}
                </div >
            )}
        </div>

    );
}
