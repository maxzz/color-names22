const plugin = require('tailwindcss/plugin');
const twColors = require('tailwindcss/colors');

// module.exports = plugin(function ({ addComponents, theme }) {
//     const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray',];
//
//     const colorGroups = Object
//         .keys(twColors)
//         .reduce((acc, key) => {
//             if (!deprecated.includes(key)) {
//                 const value = twColors[key];
//                 const isGroup = typeof value === 'object';
//                 if (isGroup) {
//                     acc[key] = value;
//                 }
//             }
//             return acc;
//         }, {});
//
//     //console.log('keys', colorGroups); // { slate: { '50': '#f8fafc', ... '900': '#0f172a' }, ... } // we can lose order
//
//     addComponents({
//         '.all-tw-colors': {
//             '--tm-tw-colors': JSON.stringify(colorGroups),
//         },
//     });
// });

module.exports = plugin(function ({ addComponents, theme }) {
    const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray',];

    const colorGroups = Object
        .keys(twColors)
        .map((key) => {
            if (!deprecated.includes(key)) {
                const value = twColors[key];
                const isGroup = typeof value === 'object';
                if (isGroup) {
                    return { [key]: value };
                }
            }
        })
        .filter(Boolean);

    //console.log('keys', colorGroups); // [ { slate: { '50': '#f8fafc', ... '900': '#0f172a' } }, ... ]

    addComponents({
        '.all-tw-colors': {
            '--tm-tw-colors': JSON.stringify(colorGroups),
        },
    });
});
