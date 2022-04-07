import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';
import { MonochromeSwitch } from './MonochromeSwitch';


export function MainBody() {
    return (
        <div className="mt-4 grid gap-4">
            <ColorInfoPanel />
            <div className="px-4">
            <div className="">
                <HueSlider />
                <MonochromeSwitch />
            </div>
            </div>
            <ColorNeighbors />
        </div>
    );
}
