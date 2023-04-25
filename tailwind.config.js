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
                custom: {
                    "100%": {
                        from: "translateY(-100%)",
                        to: "translateY(0%)",
                    },
                },
            },
            animation: {
                shimmer: "shimmer 2s infinite",
                custom: "custom 2s ",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
