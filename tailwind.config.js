/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue}"],
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1075px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            'OpenSans': ['Open Sans', 'sans-serif']
        }
    },
    plugins: [],
};
