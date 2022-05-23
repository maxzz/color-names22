import React from 'react';
import { IconGithubLogo } from './UI/UIIcons';

export function AppFooter() {
    return (
        <div className="px-4 py-2 bg-orange-200 border-slate-400 border-t shadow-[0px_-1px_2px_1px_#b69a7950] text-orange-400/75">
            <div className="flex items-center justify-end space-x-4">

                <a href="https://meyerweb.com/eric/css/colors" target="_blank" title="Color equivalents table">
                    meyerweb
                </a>

                <a href="https://enes.in/sorted-colors" target="_blank" title="Mustafa Enes sorted-colors">
                    original
                </a>

                <a href="https://maxzz.github.io/color-names" target="_blank" title="My sorted-colors take one">
                    prev
                </a>

                <a href="https://maxzz.github.io/color-names22" target="_blank">
                    <IconGithubLogo
                        className="w-5 h-5 fill-orange-200 stroke-[50] stroke-current hover:stroke-white hover:scale-[1.5] hover:stroke-[34] transition-all"
                        title="Open the source code of the project on Github"
                    />
                </a>
            </div>
        </div>
    );
}
