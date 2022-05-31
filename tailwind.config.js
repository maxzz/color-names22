const twColors = require('tailwindcss/colors');
const twTheme = require('tailwindcss/defaultTheme');
const dataState = require('./tailwind/tailwind-plugin-data-state');
const colorsBridge = require('./tailwind/tailwind-plugin-colors-bridge');
const debugStyles = require('./tailwind/tailwnd-plugin-debug-styles');
const allColors = require('./tailwind/tailwind-plugin-all-colors');

module.exports = {
    content: ['./index.html', './src/**/*.{tsx,ts,js,jsx}'],
    theme: {
        extend: {
            screens: {
                smallest: '501px',
            },
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
        allColors,
        debugStyles,
        require('@tailwindcss/forms')({ strategy: 'class' })
    ],
};
