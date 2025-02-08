import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        nav: "#A49E7D",
        gradient1: "#FCE9BE",
        gradient2: "#FFFFFF",
        textcolor1: "#4A3636"
      },
    },
  },
  plugins: [],
}) satisfies Config;
