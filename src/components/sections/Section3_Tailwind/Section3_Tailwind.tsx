import React, { ReactNode } from 'react';
import { classNames } from '../../../utils/classnames';
import { TwColorsView } from './TwColorsView';
import { TwColorInfo } from './TwColorInfo';
import useMeasure from 'react-use-measure';

function VerticalOverflowFix({ children }: { children: ReactNode; }) {
    const [refParent, parent] = useMeasure();
    const [refChild, child] = useMeasure();
    const noOverflow = parent.height > child.height;
    return (
        <div ref={refParent} className={classNames("flex-1 p-8 flex flex-col items-center overflow-overlay", noOverflow && "justify-center")}>
            <div ref={refChild} className="px-3 py-4 text-xs font-bold bg-primary-200 border-primary-300 border rounded shadow-md">
                {children}
            </div>
        </div>
    );
}

export function Section3_Tailwind({ className }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className={classNames("h-full flex flex-col bg-primary-100 overflow-hidden", className)}>
            <div className="bg-primary-200 border-slate-400 border-b">
                <TwColorInfo className="max-w-3xl mx-auto" />
            </div>

            <VerticalOverflowFix>
                <TwColorsView />
            </VerticalOverflowFix>
        </div>
    );
}
