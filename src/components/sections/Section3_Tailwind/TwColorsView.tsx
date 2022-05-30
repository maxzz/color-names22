import { Fragment } from "react";
import { useAtomValue } from "jotai";
import { allColorsAtom, currentTwColorAtom } from "@/store/store";
import { NamedGroup } from "./TailwindAllColors/tw-all-colors";
import { useUpdateAtom } from "jotai/utils";

function Row({ group }: { group: NamedGroup; }) {
    const arr = Object.entries(group)[0];
    const name = arr[0];
    const values = Object.entries(arr[1]);

    const setCurrentTwColor = useUpdateAtom(currentTwColorAtom);
    return (<>
        {values.map(([key, color], idx) => (
            <Fragment key={`${name}.${idx}`}>
                <button
                    className="p-1 w-7 h-5 border-slate-600 border rounded hover:scale-125 active:scale-x-[.8] transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => setCurrentTwColor({ group: name, key, value: color, })}
                    title={`${name}: ${key}`}
                />
            </Fragment>
        ))}

        <div className="px-2 text-xs flex items-center font-bold text-primary-900">{name}</div>
    </>);
}

export function TwColorsView() {
    const colors = useAtomValue(allColorsAtom);
    return (
        <div className="max-w-min grid grid-cols-[repeat(11,auto)] gap-0.5">
            {colors.map((group, idxRow) => (
                <Row group={group} key={idxRow} />
            ))}
        </div>

    );
}
