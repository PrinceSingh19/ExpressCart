/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"custome-slate": "#f8f9f9",
			},
			backgroundImage: {
				login: "url('/login.jpg')",
			},
		},
	},
	plugins: [],
};
