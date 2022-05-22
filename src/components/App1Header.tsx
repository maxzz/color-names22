import { useAtom } from 'jotai';
import React from 'react';
import { currentSectionAtom, SectionName } from '../store/store';
import { classNames } from '../utils/classnames';

function LinkButton({ label, sectionName }: { label: string, sectionName: SectionName; }) {
    const [currentSection, setCurrentSection] = useAtom(currentSectionAtom);
    return (
        <li
            className={classNames(
                " text-right cursor-pointer",
                currentSection === sectionName ? "text-green-700" : "",
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
                <LinkButton label="Hue groups" sectionName={SectionName.groups} />
                <LinkButton label="Named colors" sectionName={SectionName.list} />
            </ul>
        </div>
    );
}

//const textShadow = {textShadow: '#ff000069 1px 1px 2px, #afafafc4 0px 0px 2px'};
//const textShadow = {textShadow: '1px 1px red, -1px -1px white'};
//const textShadow = {textShadow: '1px 1px red, -1px -1px white', color: 'transparent', 'WebkitTextStroke': '0.5px green',};
const textShadow = { textShadow: '1px 1px red, -1px -1px white', 'WebkitTextStroke': '0.5px #f3e8ff', };

export function AppHeader() {
    return (
        <div className="relative py-4 shadow-[0px_1px_2px_1px_#ffc16d69]">
            <div className="text-3xl flex items-center text-purple-300 uppercase font-header" style={textShadow}>
                <div className="mx-auto scale-y-[1.5]">CSS Color Names</div>
            </div>

            <Links className="absolute top-0 right-2 h-full" />
        </div>
    );
}
