const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        textShadow: {
            'default': '1px 1px 3px rgb(36 37 47 / 99%)',
        },
        extend: {
            backgroundImage: theme => ({
                'register': "url('/register.jpg')",
                'bg01': "url('/bg01.png')"
            }),
            colors: {
                'primary': '#059669',
                'primary-ligth': '#05966990',
                'blue': {
                    900:'#09002c'
                }

            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(({ addVariant, e }) => {
            addVariant('label-checked', ({ modifySelectors, separator }) => {
                modifySelectors(
                    ({ className }) => {
                        const eClassName = e(`label-checked${separator}${className}`); // escape class
                        const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
                        return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
                    }
                )
            })
        }),
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar'),
        require('tailwindcss-textshadow'),
    ],
}