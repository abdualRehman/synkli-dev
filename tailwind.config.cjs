/** @type {import('tailwindcss').Config} */
let colors = require('tailwindcss/colors');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('@tailwindcss/forms')],
    theme: {
        extend: {
            colors: {
                neutral: colors.slate,
                positive: colors.green,
                urge: colors.violet,
                warning: colors.yellow,
                info: colors.blue,
                critical: colors.red
            },
            animation: {
                'spin-fast': 'spin 0.7s linear infinite'
            }
        },
    }
    // plugins: [],
};
