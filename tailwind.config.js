const twColors = require('tailwindcss/colors');
const dataState = require('./tailwind-plugin-data-state');
const colorsBridge = require('./tailwind-plugin-colors-bridge');

function buildColorsToBridge(allColors, groupName, groupNameOut) {
    const colorGroup = allColors[groupName];
    const bridge = Object.fromEntries(
        Object.keys(colorGroup).map((colorKey) => [`--tm-${groupNameOut || groupName}-${colorKey}`, colorGroup[colorKey],])
    );
    return bridge;
}

module.exports = {
    content: ['./index.html', './src/**/*.{tsx,ts,js,jsx}'],
    theme: {
        extend: {
            colors: {
                // primary: {
                //     100: twColors.blue['500'],
                // },
                primary: twColors.slate,
                title: '#06133e',
            },
            fontFamily: {
                header: ['Merriweather', 'sans-serif']
            },
            backgroundImage: () => ({
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
                'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
                'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
                'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
            }),
        },
    },
    plugins: [
        dataState,
        colorsBridge({ prefix: '--tm-', groupName: 'primary' },),
        require('@tailwindcss/forms')({ strategy: 'class' })
    ],
};
