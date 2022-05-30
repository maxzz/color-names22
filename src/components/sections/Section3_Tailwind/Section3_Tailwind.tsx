import React, { ChangeEvent, Fragment, useEffect, useRef, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { classNames } from '../../../utils/classnames';
import { NamedGroup } from './TailwindAllColors/tw-all-colors';
import { TwColorsPicker } from './TwColorsPicker';
import { TwColorsView } from './TwColorsView';
import { TwColorInfo } from './TwColorInfo';

export function Section3_Tailwind({ className }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className="h-full flex flex-col bg-primary-400">

            <div className={classNames("flex-[4_4] grid grid-cols-[auto,auto] gap-x-4 content-evenly justify-center", className)}>
                <div className="grid place-content-center">
                    <div className="p-1 bg-primary-100 border-primary-300 border rounded shadow-md"><TwColorsPicker /></div>
                </div>

                <div className="w-min grid place-content-center">
                    <div className="p-1 border-primary-300 border rounded shadow-md"><TwColorsView /></div>
                </div>
            </div>

            <div className="flex-1">
                <a className="text-url underline" href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Colors on Tailwind CSS website</a>
            </div>

        </div>
    );
}
