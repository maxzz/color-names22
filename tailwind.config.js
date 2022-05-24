const colors = require('tailwindcss/colors');
const dataState = require('./tailwind-plugin-data-state');

module.exports = {
    content: ['./index.html', './src/**/*.{tsx,ts,js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: colors.blue['500'],
                }
            },
            fontFamily: {
                header: ['Merriweather', 'sans-serif']
            }
        },
    },
    plugins: [
        ...dataState.plugins,
        require('@tailwindcss/forms')({ strategy: 'class' })
    ],
};
