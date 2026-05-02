/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#060812",
        nebula: "#261247",
        roseglow: "#ff8fb8",
        moon: "#f8f4df",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        moon: "0 0 52px rgba(248, 244, 223, 0.65), 0 0 130px rgba(248, 244, 223, 0.20), 0 0 200px rgba(255, 143, 184, 0.12)",
        glass: "0 20px 70px rgba(0, 0, 0, 0.32)",
      },
      backgroundImage: {
        "space-radial":
          "radial-gradient(circle at 50% 15%, rgba(255, 143, 184, 0.22), transparent 28%), radial-gradient(circle at 15% 20%, rgba(122, 92, 255, 0.2), transparent 24%), linear-gradient(180deg, #070914 0%, #10091d 52%, #05050a 100%)",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-80px, 60px, 0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        drift: "drift 38s linear infinite alternate",
        twinkle: "twinkle 4s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
