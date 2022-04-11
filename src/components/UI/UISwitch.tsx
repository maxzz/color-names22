import React, { useState } from 'react'; //https://codepen.io/raphaelgoetter/pen/rGjOOg
import styles from './UISwitch.module.scss';

console.log('styles', styles);


export function UISwitch() {
    const [on, setOn] = useState(false);
    const label = "Name";
    return (<>
        <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input type="checkbox" className={`${styles.switch} cursor-pointer`} />
            <span>{label}</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input type="checkbox" className={`${styles.radio} cursor-pointer`} />
            <span>{label}</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input type="checkbox" className={`${styles.checkbox} cursor-pointer`} />
            <span>{label}</span>
        </label>
    </>
    );
}
