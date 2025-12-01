import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode - Soft creamy palette
        cream: {
          50: "#FFFCF7",   // Lightest cream
          100: "#FFF5E8",  // Main background
          200: "#FFECD6",  // Subtle accents
          300: "#FFE0C1",  // Cards/surfaces
        },
        
        // Dark mode - Rich dark palette
        slate: {
          950: "#0F0F14",  // Darkest background
          900: "#1A1A24",  // Main background
          800: "#252532",  // Cards/surfaces
          700: "#34343F",  // Borders
        },
        
        // Orange accent - vibrant but not overwhelming
        accent: {
          light: "#FF9F66",   // For light mode
          DEFAULT: "#FF7A3D", // Primary orange
          dark: "#FF6B2B",    // For dark mode (slightly more saturated)
        },
        
        // Text colors
        text: {
          light: "#2B2416",   // Dark brown text for light mode
          dark: "#F5F1ED",    // Cream text for dark mode
          muted: {
            light: "#6B5D4F", // Muted text light mode
            dark: "#A8A199",  // Muted text dark mode
          }
        },
      },
    },
  },
  plugins: [],
};

export default config;