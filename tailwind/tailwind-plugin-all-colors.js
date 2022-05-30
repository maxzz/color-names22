const plugin = require('tailwindcss/plugin');
const twColors = require('tailwindcss/colors');

module.exports = plugin(function ({ addComponents, theme }) {
    //const colors = theme('colors'); // get all currently definaed colors
    //console.log('colors', colors);

    //Object.entries(twColors).map(([key, values]) => Array.isArray(values) && console.log(key))
    //Object.entries(twColors).map(([key, values]) => console.log(values))

    //Object.keys(twColors).map((key) => console.log(key))

    //Object.keys(twColors).map((key) => console.log(key, typeof key === 'string'))

    //Object.keys(twColors).map((key) => console.log(key, typeof twColors[key] === 'string'))
    // warn - As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`.
    // warn - As of Tailwind CSS v3.0, `warmGray` has been renamed to `stone`.
    // warn - As of Tailwind CSS v3.0, `trueGray` has been renamed to `neutral`.
    // warn - As of Tailwind CSS v3.0, `coolGray` has been renamed to `gray`.
    // warn - As of Tailwind CSS v3.0, `blueGray` has been renamed to `slate`.

    // const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...woLegayColors } = twColors;
    // Object.keys(woLegayColors).map((key) => console.log(key, typeof twColors[key] === 'string'))

    // const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...woLegayColors } = twColors;
    // console.log('woLegayColors', woLegayColors)

    const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray',];
    const colorGroups = [];
    Object.keys(twColors).map((key) => {
        if (!deprecated.includes(key)) {
            const value = twColors[key];
            const isGroup = typeof value === 'object';
            if (isGroup) {
                //console.log(key, typeof value === 'object');
                colorGroups.push({ [key]: value });
            }
        }
    });

    console.log('colorGroups', colorGroups);

    addComponents({
        '.all-tw-colors': {
            '--colors': JSON.stringify(colorGroups),
        },
    })

    //console.log('colors', twColors);
});
