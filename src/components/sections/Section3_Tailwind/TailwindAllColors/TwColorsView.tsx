import { Fragment, useEffect, useRef, useState } from "react";
import { NamedGroup } from "./tw-all-colors";

function Row({ group }: { group: NamedGroup; }) {
    const arr = Object.entries(group)[0];
    const name = arr[0];
    const values = Object.entries(arr[1]);
    return (<>
        {values.map(([key, color], idx) => (
            <Fragment key={`${name}.${idx}`}>
                <button className="w-7 h-5 rounded" style={{ backgroundColor: color }} title={`${name}: ${key}`} />
            </Fragment>
        ))}

        <div className="px-2 text-xs flex items-center bg-[#878787]">{name}</div>
    </>);
}

export function TwColorsView() {
    const colorsRef = useRef<NamedGroup[]>([]);
    const [colors, setColors] = useState<NamedGroup[]>([]);

    useEffect(() => setColors(colorsRef.current), [colorsRef]);

    function getColors(el: HTMLDivElement) {
        const colors = JSON.parse(el && getComputedStyle(el).getPropertyValue('--tm-tw-colors') || '[]');
        colorsRef.current = colors || [];
    }

    return (
        <div ref={getColors} className="max-w-min grid grid-cols-[repeat(11,auto)] gap-0.5 all-tw-colors">
            {colors.map((group, idxRow) => (
                <Row group={group} key={idxRow} />
            ))}
        </div>

    );
}
