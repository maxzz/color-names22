import React from 'react';
import { classNames } from '../../../utils/classnames';
import { TwColorsPicker } from './TwColorsPicker';
import { TwColorsView } from './TwColorsView';
import { TwColorInfo } from './TwColorInfo';

export function Section3_Tailwind({ className }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className={classNames("h-full flex flex-col bg-primary-200 overflow-y-auto", className)}>
            <div className="bg-primary-300">
                <TwColorInfo className="max-w-3xl mx-auto" />
            </div>

            <div className={classNames("flex-1 grid grid-cols-[auto,auto] gap-x-4 content-evenly justify-center")}>
                {/* <div className="grid place-content-center">
                    <div className="p-1 bg-primary-100 border-primary-300 border rounded shadow-md"><TwColorsPicker /></div>
                </div> */}

                <div className="p-4 w-min grid place-content-center">
                    <div className="p-1 bg-primary-400 border-primary-300 border rounded shadow-md">
                        <TwColorsView />
                    </div>
                </div>
            </div>

            <div className="">
                <a className="text-url underline" href="https://tailwindcss.com/docs/customizing-colors" target="_blank">
                    Colors on Tailwind CSS website
                </a>
            </div>
        </div>
    );
}
