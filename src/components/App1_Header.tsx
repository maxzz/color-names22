import { useAtom } from 'jotai';
import React from 'react';
import { AppAtoms, SectionName } from '../store/store';
import { classNames } from '../utils/classnames';

const btnStyle = {
    "hi": {
        backgroundColor: "#11225d",
        boxShadow: "0px 0px 3px 3px #2c4083"
    }
};//text-[#347d84]

function LinkButton({ label, sectionName }: { label: string, sectionName: SectionName; }) {
    const [currentSection, setCurrentSection] = useAtom(AppAtoms.currentSectionAtom);
    const isActive = currentSection === sectionName;
    return (
        <li
            className={classNames(
                "px-2 py-1 text-sm text-center border-primary-500 border rounded select-none cursor-pointer active:scale-[.98] transition-colors",
                isActive ? "text-primary-300 bg-title border-primary-300" : "text-primary-500 hover:text-primary-300 hover:border-primary-300",
            )}
            style={isActive ? btnStyle.hi : {}}
            onClick={() => setCurrentSection(sectionName)}
        >
            {label}
        </li>
    );
}

function Links({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("flex items-center", className)}>
            <ul className="space-y-2">
                <LinkButton label="Hue groups" sectionName={SectionName.hue} />
                <LinkButton label="Named colors" sectionName={SectionName.list} />
                <LinkButton label="Tailwind" sectionName={SectionName.tailwind} />
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
        <div className="relative py-12 bg-title border-primary-400 border-b shadow-[0px_1px_2px_1px_#ffc16d69]">
            <div className="text-base flex items-center uppercase font-orgiginal" style={textShadow}>
                <div className="mx-auto scale-y-[1.5]">CSS Color Names</div>
            </div>

            <Links className="absolute top-0 right-2 h-full" />
        </div>
    );
}
