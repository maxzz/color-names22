import { useEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { ColorGroups } from "./tw-colors-types";
import { allColorsAtom } from "@/store/store";

// ./tailwind/tailwind-plugin-all-colors.js defines '.all-tw-colors' class with all colors and we put them into DOM.

export function TailwindAllColorsBridge() {
    const colorsRef = useRef<ColorGroups>({});
    const setColors = useSetAtom(allColorsAtom);

    useEffect(() => setColors(colorsRef.current), [colorsRef]);

    function getColors(el: HTMLDivElement | null) {
        const twAttr = el && getComputedStyle(el).getPropertyValue('--tm-tw-colors');
        const colors = JSON.parse(twAttr || '[]');
        colorsRef.current = colors || {};
    }

    return (
        <div ref={getColors} className="hidden absolute all-tw-colors" />
    );
}
