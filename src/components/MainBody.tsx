import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors/ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';


export function MainBody() {
    return (
        <div className="mt-4 grid gap-4">
            <ColorInfoPanel />
            <div className="px-4">
            <HueSlider />
            </div>
            <ColorNeighbors />
        </div>
    );
}
