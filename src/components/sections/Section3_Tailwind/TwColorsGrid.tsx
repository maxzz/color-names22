import { Fragment } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { allColorsAtom, currentTwColorAtom } from "@/store";
import { GroupValues } from "@/components/UI/TailwindColorsBridge";

function Row({ groupName, groupValues }: { groupName: string; groupValues: GroupValues; }) {
    const values = Object.entries(groupValues);
    const setCurrentTwColor = useSetAtom(currentTwColorAtom);
    return (<>
        {values.map(([key, color], idx) => (
            <Fragment key={`${groupName}.${idx}`}>
                <button
                    className="p-1 h-6 border-slate-600 border rounded hover:scale-125 active:scale-[.97] transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => setCurrentTwColor({ group: groupName, key, value: color, })}
                    title={`${groupName}: ${key}`}
                />
            </Fragment>
        ))}

        <div className="px-2 flex items-center text-primary-900">{groupName}</div>
    </>);
}

export function TwColorsGrid() {
    const colors = useAtomValue(allColorsAtom);
    const groups = Object.entries(colors);
    console.log('groups',groups);
    console.log('colors',colors);
    
    const cnt = Object.keys(groups[0]?.[1] || {}).length;
    return (
        // <div className="grid grid-cols-[repeat(11,minmax(16px,46px)),auto] gap-0.5">
        <div className={`grid gap-0.5`} style={{gridTemplateColumns: `repeat(${cnt}, minmax(16px,46px)) auto`}}>
            {groups.map(([groupName, groupValues], idxRow) => (
                <Row groupName={groupName} groupValues={groupValues} key={idxRow} />
            ))}
        </div>
    );
}

//TODO: WIP. ---------- TwColorsGrid. N of colors changed 10 -> 11
