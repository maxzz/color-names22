const plugin = require('tailwindcss/plugin');

function buildColorsToBridge(allColors, groupName, groupNameOut) {
    const colorGroup = allColors[groupName];
    const bridge = Object.fromEntries(
        Object.keys(colorGroup).map((colorKey) => [`--tm-${groupNameOut || groupName}-${colorKey}`, colorGroup[colorKey],])
    );
    return bridge;
}

module.exports = plugin.withOptions(function (options) {
    console.log('options', options);
    return function({ theme, addBase }) {
        const bridge = buildColorsToBridge(theme('colors'), 'primary', 'primary');
        addBase({
            ':root': {
                ...bridge
            },
        });
    };
});
