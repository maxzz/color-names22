const plugin = require('tailwindcss/plugin');

function buildColorsToBridge(allColors, groupName, groupNameOut) {
    const colorGroup = allColors[groupName];
    const bridge = Object.fromEntries(
        Object.keys(colorGroup).map((colorKey) => [`--tm-${groupNameOut || groupName}-${colorKey}`, colorGroup[colorKey],])
    );
    return bridge;
}

function colorsBridge({ theme, addBase }) {
    const bridge = buildColorsToBridge(theme('colors'), 'primary', 'primary');
    addBase({
        ':root': {
            ...bridge
        },
    });
}

module.exports = {
    plugins: [
        plugin(function(helpers) {
            colorsBridge(helpers);
        })
    ]
};
