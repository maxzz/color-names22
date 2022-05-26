const plugin = require('tailwindcss/plugin');

/**
 * 
 * @param {Record<string, string>[]} allColors 
 * @param {GroupOptions} o 
 * @returns {Record<string, string>}
 */
function buildColorsToBridge(allColors, o) {
    const colorGroup = allColors[o.groupName];

    const bridge = Object.fromEntries(
        Object.keys(colorGroup).map((colorKey) => [`${o.prefix}${o.groupNameOut || o.groupName}-${colorKey}`, colorGroup[colorKey],])
    );

    return bridge;
}

/**
 * @type {GroupOptions}
 */
const defOptions = {
    prefix: '--tm-',
    groupName: 'primary',
    groupNameOut: 'primary',
};

module.exports = plugin.withOptions(function (options) {
    console.log('options new', options);

    return function ({ theme, addBase }) {
        const allColors = theme('colors');

        const o = { ...defOptions, ...options };
        const bridge = buildColorsToBridge(allColors, o);

        addBase({
            ':root': {
                ...bridge
            },
        });
    };
});

/**
 * @typedef GroupOptions
 * @property {string} prefix // output color name prefix
 * @property {string} groupName
 * @property {string} groupNameOut
 */
