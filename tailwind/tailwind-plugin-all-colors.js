const plugin = require('tailwindcss/plugin');
const twColors = require('tailwindcss/colors');

module.exports = plugin(function ({ addComponents, theme }) {
    const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray',];

    const colorGroups = Object
        .keys(twColors)
        .reduce((acc, key) => {
            if (!deprecated.includes(key)) {
                const value = twColors[key];
                const isGroup = typeof value === 'object';
                if (isGroup) {
                    acc[key] = value;
                }
            }
            return acc;
        }, {});

    //console.log('keys', colorGroups); // { slate: { '50': '#f8fafc', ... '900': '#0f172a' }, ... } // js preserve member order

    addComponents({
        '.all-tw-colors': {
            '--tm-tw-colors': JSON.stringify(colorGroups),
        },
    });
});

// module.exports = plugin(function ({ addComponents, theme }) {
//     const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray',];

//     const colorGroups = Object
//         .keys(twColors)
//         .map((key) => {
//             if (!deprecated.includes(key)) {
//                 const value = twColors[key];
//                 const isGroup = typeof value === 'object';
//                 if (isGroup) {
//                     return { [key]: value };
//                 }
//             }
//         })
//         .filter(Boolean);

//     //console.log('keys', colorGroups); // [ { slate: { '50': '#f8fafc', ... '900': '#0f172a' } }, ... ]

//     addComponents({
//         '.all-tw-colors': {
//             '--tm-tw-colors': JSON.stringify(colorGroups),
//         },
//     });
// });

/*
var a = {a:1}
a['c'] = 2
a['b'] = 3
a                   -> {a: 1, c: 2, b: 3}
JSON.stringify(a)   -> '{"a":1,"c":2,"b":3}'
var b = JSON.stringify(a)
b                   -> '{"a":1,"c":2,"b":3}'
var c = JSON.parse(b)
c                   -> {a: 1, c: 2, b: 3}
*/