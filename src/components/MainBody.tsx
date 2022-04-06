import { ColorInfoPanel } from './ColorInfoPanel';
import { ColorNeighbors } from './ColorNeighbors';
import { HueSlider } from './HueSlider/HueSlider';


export function MainBody() {
    return (
        <div className="text-primary-100">
            <ColorInfoPanel />
            <HueSlider />
            <ColorNeighbors />
        </div>
    );
}
