import { useAtomValue } from 'jotai';
import { currentSectionAtom, SectionName } from '../store/store';
import { classNames } from '../utils/classnames';
import { ColorsGroup } from './sections/ColorsGroup/ColorsGroup';
import { ColorsList, SortOrderSwitch } from './sections/ColorsList/ColorsList';
import { Experiments } from './UI/experiments/Experiments';

export function MainBody({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const currentSection = useAtomValue(currentSectionAtom);
    return (
        <div className={classNames("main min-h-0", className)}>
            {/* <Experiments /> */}

            {currentSection === SectionName.groups &&
                <>
                    <div className="mt-8 px-4 text-xl font-header border-slate-700 border-b">
                        Section two: sorted groups
                    </div>

                    <ColorsGroup />
                </>
            }

            {currentSection === SectionName.list &&
                <div className="sec h-full flex flex-col">
                    <div className="mt-8 px-4 border-slate-700 border-b flex items-center justify-between space-x-4">
                        <div className="text-xl font-header">
                            Section one: colors list
                        </div>

                        <SortOrderSwitch className="px-4" />
                    </div>

                    <ColorsList className="list overflow-auto" />
                </div>
            }
        </div>
    );
}
