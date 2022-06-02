import React from 'react';
import { classNames } from '../../../utils/classnames';
import { TwColorsView } from './TwColorsView';
import { TwColorInfo } from './TwColorInfo';

export function Section3_Tailwind({ className }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className={classNames("h-full flex flex-col bg-primary-100 overflow-y-auto", className)}>
            <div className="bg-primary-200">
                <TwColorInfo className="max-w-3xl mx-auto" />
            </div>

            <div className="flex-1">
                <div className={classNames("p-8 h-full flex flex-col items-center justify-center")}>
                    <div className="px-3 py-4 text-xs font-bold bg-primary-200 border-primary-300 border rounded shadow-md">
                        <TwColorsView />
                    </div>
                </div>
            </div>
        </div>
    );
}
