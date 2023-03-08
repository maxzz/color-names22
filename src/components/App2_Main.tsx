import { useAtomValue } from 'jotai';
import { AppAtoms, SectionName } from '../store/store';
import { classNames } from '../utils/classnames';
import { Section1_ColorsByHue } from './sections/Section1_ColorsByHue';
import { Section2_ColorsList } from './sections/Section2_ColorsList';
import { Section3_Tailwind } from './sections/Section3_Tailwind';
import { Experiments } from './UI/experiments/Experiments';

export function App2_Main({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const currentSection = useAtomValue(AppAtoms.currentSectionAtom);
    return (
        <div className={classNames("min-h-0 text-primary-900 bg-gradient-radial-to-tl from-slate-200 to-slate-50", className)}>
            {/* <Experiments /> */}

            {currentSection === SectionName.hue &&
                <div className="h-full flex flex-col">
                    <Section1_ColorsByHue className="flex-1 overflow-y-auto" style={{ overflow: 'overlay' }} />
                </div>
            }

            {currentSection === SectionName.list &&
                <div className="h-full flex flex-col">
                    <Section2_ColorsList className="flex-1" />
                </div>
            }

            {currentSection === SectionName.tailwind &&
                <div className="h-full flex flex-col">
                    <Section3_Tailwind className="flex-1" />
                </div>
            }

        </div>
    );
}
