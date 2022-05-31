import { useUpdateAtom } from "jotai/utils";
import { useEffect, useRef, useState } from "react";
import { allColorsAtom } from "@/store/store";
import { ColorGroups } from "./tw-all-colors";

export function TailwindAllColorsBridge() {
    const colorsRef = useRef<ColorGroups[]>([]);
    const setColors = useUpdateAtom(allColorsAtom);

    useEffect(() => setColors(colorsRef.current), [colorsRef]);

    function getColors(el: HTMLDivElement) {
        const colors = JSON.parse(el && getComputedStyle(el).getPropertyValue('--tm-tw-colors') || '[]');
        colorsRef.current = colors || [];
    }

    return (
        <div ref={getColors} className="absolute hidden all-tw-colors" />
    );
}
