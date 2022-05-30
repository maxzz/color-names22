const twColors = require('tailwindcss/colors');
const twTheme = require('tailwindcss/defaultTheme');
const dataState = require('./tailwind/tailwind-plugin-data-state');
const colorsBridge = require('./tailwind/tailwind-plugin-colors-bridge');
const debugStyles = require('./tailwind/tailwnd-plugin-debug-styles');

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
                url: twColors.blue['500'],
            },
            fontFamily: {
                header: ['Merriweather', ...twTheme.fontFamily.sans],
                orgiginal: [...twTheme.fontFamily.sans],
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
        debugStyles,
        require('@tailwindcss/forms')({ strategy: 'class' })
    ],
};
