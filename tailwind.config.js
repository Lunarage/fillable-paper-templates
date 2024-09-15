import catppuccin from "@catppuccin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      spacing: {
        a4x: "210mm",
        a4y: "297mm",
        a5x: "148mm",
        a5y: "210mm",
        "5mm": "5mm",
      },
      inset: {
        0: "0",
      },
    },
  },
  plugins: [
    catppuccin({
      defaultFlavour: "latte",
    }),
  ],
};
