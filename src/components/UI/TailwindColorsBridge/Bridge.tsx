import { useEffect, useRef } from "react";
import { useUpdateAtom } from "jotai/utils";
import { ColorGroups } from "./tw-all-colors";
import { allColorsAtom } from "@/store/store";

export function TailwindAllColorsBridge() {
    const colorsRef = useRef<ColorGroups>({});
    const setColors = useUpdateAtom(allColorsAtom);

    useEffect(() => setColors(colorsRef.current), [colorsRef]);

    function getColors(el: HTMLDivElement) {
        const colors = JSON.parse(el && getComputedStyle(el).getPropertyValue('--tm-tw-colors') || '[]');
        colorsRef.current = colors || {};
    }

    return (
        <div ref={getColors} className="hidden absolute all-tw-colors" />
    );
}
