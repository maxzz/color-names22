import { useUpdateAtom } from "jotai/utils";
import { useEffect, useRef, useState } from "react";
import { allColorsAtom } from "@/store/store";
import { NamedGroup } from "./tw-all-colors";

export function TailwindAllColorsBridge() {
    const colorsRef = useRef<NamedGroup[]>([]);
    const setColors = useUpdateAtom(allColorsAtom);

    useEffect(() => setColors(colorsRef.current), [colorsRef]);

    function getColors(el: HTMLDivElement) {
        const colors = JSON.parse(el && getComputedStyle(el).getPropertyValue('--tm-tw-colors') || '[]');
        colorsRef.current = colors || [];
    }

    return (
        <div ref={getColors} className="all-tw-colors" />
    );
}
