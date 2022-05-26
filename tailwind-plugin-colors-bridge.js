const plugin = require('tailwindcss/plugin');

function buildColorsToBridge(allColors, prefix, groupName, groupNameOut) {
    const colorGroup = allColors[groupName];

    const bridge = Object.fromEntries(
        Object.keys(colorGroup).map((colorKey) => [`${prefix}${groupNameOut || groupName}-${colorKey}`, colorGroup[colorKey],])
    );

    return bridge;
}

const defOptions = {
    prefix: '--tm-',
    groupName: 'primary',
    groupNameOut: 'primary',
};

module.exports = plugin.withOptions(function (options) {
    console.log('options', options);

    return function ({ theme, addBase }) {
        const allColors = theme('colors');
        const prefix = '--tm-';
        const o = { ...defOptions, ...options };
        const bridge = buildColorsToBridge(allColors, o.prefix, o.groupName, o.groupNameOut);
        addBase({
            ':root': {
                ...bridge
            },
        });
    };
});
