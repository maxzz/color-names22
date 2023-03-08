import { Fragment } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { allColorsAtom, currentTwColorAtom } from "@/store/store";
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

export function TwColorsView() {
    const colors = useAtomValue(allColorsAtom);
    const groups = Object.entries(colors);
    return (
        <div className="grid grid-cols-[repeat(10,minmax(16px,46px)),auto] gap-0.5">
            {groups.map(([groupName, groupValues], idxRow) => (
                <Row groupName={groupName} groupValues={groupValues} key={idxRow} />
            ))}
        </div>
    );
}
