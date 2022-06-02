import React from 'react';
import { classNames } from '../../../utils/classnames';
import { TwColorsView } from './TwColorsView';
import { TwColorInfo } from './TwColorInfo';

export function Section3_Tailwind({ className }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className="h-full overflow-hidden">
            <div className={classNames("h-full flex flex-col bg-primary-100 overflow-overlay", className)}>
                <div className="bg-primary-200">
                    <TwColorInfo className="max-w-3xl mx-auto" />
                </div>
                <div className="flex-1 ">
                    {/* overflow-hidden */}
                    <div className="h-full ">
                        {/* overflow-overlay */}
                        <div className={classNames("h-full p-8 flex flex-col items-center justify-center")}>
                            <div className="px-3 py-4 text-xs font-bold bg-primary-200 border-primary-300 border rounded shadow-md">
                                <TwColorsView />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
