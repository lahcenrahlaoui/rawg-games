/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                }, 
                bouncex: {
                    "0%, 100%": {
                        transform: "translateX(-25%)",
                        animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
                    },
                    "50%": {
                        transform: "none",
                        animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
                    },
                },
            },
            animation: {
                shimmer: "shimmer 2s infinite",
                bouncex: "bouncex 2s infinite",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
