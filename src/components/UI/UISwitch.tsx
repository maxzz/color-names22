import React, { useState } from 'react'; //https://codepen.io/raphaelgoetter/pen/rGjOOg
import styles from './UISwitch.module.scss';

console.log('styles', styles);


export function UISwitch() {
    const [on, setOn] = useState(false);
    const label = "Name";
    return (
        <label className="flex items-center space-x-2">
            <input type="checkbox" className={`${styles.switch}`} />
            <span>{label}</span>
        </label>
    );
}
