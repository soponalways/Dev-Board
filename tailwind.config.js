/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                bgColor: '#F4F7FF',
                textColor: '#00303C',
            }
        },
        fontFamily: {
            'Poppins': ['Poppins', 'sans-serif'],
        }
    },
    plugins: [],
}
