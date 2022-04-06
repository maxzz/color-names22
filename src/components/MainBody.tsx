import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';


export function MainBody() {
    return (
        <div className="grid gap-4">
            <ColorInfoPanel />
            <HueSlider />
            <ColorNeighbors />
        </div>
    );
}
