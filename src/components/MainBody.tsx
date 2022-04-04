import { useState } from 'react';
import './hue-slider.scss';

function HueSlider() {
    const [color, setColor] = useState(40);
    return (
        <input
            className="hue-slider"
            type="range"
            min="0"
            max="360"
            value={color}
            onChange={(event) => {
                console.log('vvv', +event.target.value);
                
                setColor(+event.target.value);
            }}
        />
    );
}

export function MainBody() {
    return (
        <div className="text-primary-100">
            Ground zero
            <HueSlider />
        </div>
    );
}
