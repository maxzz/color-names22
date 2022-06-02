import React from 'react';
import { classNames } from '../../../utils/classnames';
import { TwColorsView } from './TwColorsView';
import { TwColorInfo } from './TwColorInfo';

export function Section3_Tailwind({ className }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        
            <div className={classNames("h-full flex flex-col bg-primary-100 ", className)}>
                <div className="bg-primary-200">
                    <TwColorInfo className="max-w-3xl mx-auto" />
                </div>
                <div className="flex-1 overflow-hidden">
                    {/* overflow-hidden */}
                    <div className="h-full overflow-overlay">
                        {/* overflow-overlay */}
                        <div className="h-1"></div>
                        <div className={classNames("h-full p-8 flex flex-col items-center justify-center")}>
                            <div className="px-3 py-4 text-xs font-bold bg-primary-200 border-primary-300 border rounded shadow-md">
                                <TwColorsView />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}
