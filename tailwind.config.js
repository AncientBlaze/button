
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./assets/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'Dancing_script': ["Dancing Script", "cursive"],
                'jost': ["Jost", "sans-serif"],
                'DM_sans': ["DM Sans", "sans-serif"],
                'playfair': ["Playfair Display", "serif"],
                'satisfy': ["Satisfy", "cursive"],
                'shadows': ["Shadows Into Light", "cursive"]
            },
            backgroundPosition: {
                'left-bottom': '0 100%',
                'right-bottom': '100% 100%'
            },
            backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
                '50%': '50%',
                '16': '4rem',
                'customsize': '0% 2px',
                'customsize1': '100% 2px' 
            },
            backgroundImage: {
                'custom1': 'linear-gradient(#000 0 0)'
            },
            boxShadow: {
                '3xl' : '0px 0px 0px 0px rgba(0, 0, 0, 1 )',
            }
        },
    },
    safelist: [],
}