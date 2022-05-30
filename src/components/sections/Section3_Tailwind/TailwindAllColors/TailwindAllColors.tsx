import { useUpdateAtom } from "jotai/utils";
import { useEffect, useRef, useState } from "react";
import { allColorsAtom } from "@/store/store";

export type ColorGroup = Record<string, string>;
export type NamedGroup = Record<string, ColorGroup>;

export function TailwindAllColors() {
    const colorsRef = useRef<NamedGroup[]>([]);
    const setColors = useUpdateAtom(allColorsAtom);

    useEffect(() => setColors(colorsRef.current), [colorsRef]);

    function getColors(el: HTMLDivElement) {
        const colors = JSON.parse(el && getComputedStyle(el).getPropertyValue('--tm-tw-colors') || '[]');
        colorsRef.current = colors || [];
    }

    return (
        <div ref={getColors} className="max-w-min grid grid-cols-[repeat(11,auto)] gap-0.5 all-tw-colors" />
    );
}
