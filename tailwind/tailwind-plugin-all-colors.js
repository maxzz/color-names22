const plugin = require('tailwindcss/plugin');
const twColors = require('tailwindcss/colors');

module.exports = plugin(function ({ addComponents, theme }) {
    const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray',];
    
    const colorGroups = Object.keys(twColors).map((key) => {
        if (!deprecated.includes(key)) {
            const value = twColors[key];
            const isGroup = typeof value === 'object';
            if (isGroup) {
                return { [key]: value };
            }
        }
    }).filter(Boolean);

    addComponents({
        '.all-tw-colors': {
            '--tm-tw-colors': JSON.stringify(colorGroups),
        },
    });
});
