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
        ...dataState.plugins,
        require('@tailwindcss/forms')({ strategy: 'class' })
    ],
};
