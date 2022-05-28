import { useAtomValue } from 'jotai';
import { AppAtoms, SectionName } from '../store/store';
import { classNames } from '../utils/classnames';
import { Section1_ColorsByHue } from './sections/Section1_ColorsByHue/Section1_ColorsByHue';
import { Section2_ColorsList, SortOrderSwitch } from './sections/Section2_ColorsList/Section2_ColorsList';
import { Experiments } from './UI/experiments/Experiments';

export function App2_Main({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const currentSection = useAtomValue(AppAtoms.currentSectionAtom);
    return (
        <div className={classNames("min-h-0 bg-gradient-radial-to-tl from-slate-200 to-slate-50", className)}>
            {/* <Experiments /> */}

            {currentSection === SectionName.hue &&
                <div className="h-full flex flex-col">
                    {/* <div className="mt-8 px-4 text-xl font-header border-slate-700 border-b">
                        Section two: sorted groups
                    </div> */}

                    <Section1_ColorsByHue className="flex-1 overflow-y-auto" style={{ overflow: 'overlay' }} />
                </div>
            }

            {currentSection === SectionName.list &&
                <div className="h-full flex flex-col">
                    <div className="mt-8 px-4 border-slate-700 border-b flex items-center justify-between space-x-4">
                        <div className="text-xl font-header">
                            Section one: colors list
                        </div>

                        <SortOrderSwitch className="px-4" />
                    </div>

                    <Section2_ColorsList className="flex-1 overflow-auto" />
                </div>
            }

        </div>
    );
}
