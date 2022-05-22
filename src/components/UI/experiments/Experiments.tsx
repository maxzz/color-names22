import { UISwitch } from './swtches/UISwitch';
import { UISwitchCheck } from './swtches/UISwitchCheck';
import { UISwitchRadio } from './swtches/UISwitchRadio';

import { UICoffeAnimation } from './coffe-animation/UICoffeAnimation';

export function Experiments() {
    return (
        <div className="">
            <UICoffeAnimation />

            <div className="px-4 flex space-x-4">
                <UISwitch />
                <UISwitchCheck />
                <UISwitchRadio />
            </div>
        </div>
    );
}
