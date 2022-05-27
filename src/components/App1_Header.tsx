import { useAtom } from 'jotai';
import React from 'react';
import { AppAtoms, SectionName } from '../store/store';
import { classNames } from '../utils/classnames';

function LinkButton({ label, sectionName }: { label: string, sectionName: SectionName; }) {
    const [currentSection, setCurrentSection] = useAtom(AppAtoms.currentSectionAtom);
    return (
        <li
            className={classNames(
                " text-right select-none cursor-pointer",
                currentSection === sectionName ? "font-bold underline text-primary-100" : "text-primary-500",
            )}
            onClick={() => setCurrentSection(sectionName)}
        >
            {label}
        </li>
    );
}

function Links({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("flex items-center", className)}>
            <ul>
                <LinkButton label="Hue groups" sectionName={SectionName.hue} />
                <LinkButton label="Named colors" sectionName={SectionName.list} />
            </ul>
        </div>
    );
}

//const textShadow = { textShadow: '1px 1px red, -1px -1px white', 'WebkitTextStroke': '0.5px #f3e8ff', };
// const textShadow = { textShadow: 'red 1px 1px, #5f81f473 -1px -1px', 'WebkitTextStroke': '0.5px #232c49', };
const textShadow = {
    textShadow: "#347d84 1px 1px, #8c9cd475 -3px 0px 5px",
    WebkitTextStroke: "0.5px #000000",
    color: "rgb(102 116 161)",
};

export function App1_Header() {
    return (
        <div className="relative py-8 bg-title border-primary-400 border-b shadow-[0px_1px_2px_1px_#ffc16d69]">
            <div className="text-base flex items-center uppercase" style={textShadow}>
                <div className="mx-auto scale-y-[1.5]">CSS Color Names</div>
            </div>

            <Links className="absolute top-0 right-2 h-full" />
        </div>
    );
}
