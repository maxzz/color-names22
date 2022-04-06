import { useRef } from "react";
import { useAtom } from "jotai";
import { hueAtom } from "../../store/store";
import './HueSlider.scss';

export function HueSlider() {
    const [color, setColor] = useAtom(hueAtom);
    const sliderRef = useRef<HTMLInputElement>(null);
    return (
        <input
            className="w-full h-8 rounded hue-slider"
            ref={sliderRef}
            type="range"
            min="0"
            max="360"
            value={color}
            onChange={(event) => {
                const value = +event.target.value;
                sliderRef.current?.style.setProperty('--pos', `${value % 360}`);
                setColor(value);
            }}
        />
    );
}
