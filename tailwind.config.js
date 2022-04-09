const colors = require('tailwindcss/colors');

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
                header: ['Merriweather Bold', 'sans-serif']
            }
        },
    },
    plugins: [],
};
