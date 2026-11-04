/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Botanical Editorial Luxury Palette
        ivory: {
          DEFAULT: '#F5EFE5', // Warm Ivory primary canvas
          pure: '#FFFFFF',
          surface: '#FAF7F2',
          cream: '#F2EADB',
          border: '#E8DFD3',
          card: '#FAF5ED',
        },
        forest: {
          DEFAULT: '#193C3B', // Deep Forest Teal
          deep: '#102726',
          dark: '#143130',
          light: '#255453',
          border: 'rgba(214, 181, 111, 0.2)',
          surface: '#1F4746',
        },
        wine: {
          DEFAULT: '#401D2C', // Deep Wine contrast
          dark: '#2A101C',
          deep: '#1F0B14',
          light: '#5C283F',
          soft: '#F4ECEF',
          border: 'rgba(64, 29, 44, 0.25)',
        },
        terracotta: {
          DEFAULT: '#D66D59', // Terracotta highlights & CTAs
          dark: '#BA5643',
          light: '#E28472',
          soft: '#FDF2EE',
          border: 'rgba(214, 109, 89, 0.3)',
        },
        gold: {
          DEFAULT: '#D6B56F', // Antique Gold decorative details
          dark: '#B8964E',
          light: '#E8CF96',
          pale: '#FDF9EE',
          border: 'rgba(214, 181, 111, 0.35)',
        },
        charcoal: {
          DEFAULT: '#292323', // Primary Dark Charcoal typography
          muted: '#665C5C',   // Secondary body text
          soft: '#8C8282',    // Subtle metadata / captions
          surface: '#362E2E',
        },

        // Backward compatibility mappings
        teal: {
          DEFAULT: '#193C3B',
          deep: '#102726',
        },
        maroon: {
          DEFAULT: '#401D2C',
          dark: '#2A101C',
          deep: '#1F0B14',
          light: '#5C283F',
          glow: '#D66D59',
        },
        marigold: {
          DEFAULT: '#D6B56F',
          dark: '#B8964E',
          light: '#E8CF96',
          pale: '#FDF9EE',
          amber: '#D66D59',
          border: 'rgba(214, 181, 111, 0.35)',
        },
        brass: {
          DEFAULT: '#D6B56F',
          dark: '#B8964E',
          light: '#E8CF96',
          pale: '#FDF9EE',
          border: 'rgba(214, 181, 111, 0.35)',
        },
        paper: {
          DEFAULT: '#F5EFE5',
          sand: '#ECE3D5',
          surface: '#FFFFFF',
          border: '#E8DFD3',
          card: '#FAF5ED',
        },
        night: {
          DEFAULT: '#141E1E',
          surface: '#192828',
          card: '#1F3434',
          border: '#2A4645',
          muted: '#A5B5B4',
          text: '#F5EFE5',
          highlight: '#254443',
        },
        blush: {
          DEFAULT: '#F6ECE8',
          light: '#FAF3F0',
          surface: '#FFFFFF',
          border: '#ECD8D1',
        },
        roseBrand: {
          DEFAULT: '#401D2C',
          dark: '#2A101C',
          deep: '#1F0B14',
          light: '#F4ECEF',
          tint: '#FAF5F7',
          border: '#EADCE1',
        },
        warmgrey: {
          DEFAULT: '#665C5C',
          body: '#292323',
          dark: '#141E1E',
          light: '#8C8282',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'paper-sm': '0 1px 3px rgba(41, 35, 35, 0.05), 0 1px 2px rgba(41, 35, 35, 0.03)',
        'paper-md': '0 8px 24px -6px rgba(41, 35, 35, 0.08), 0 2px 6px -2px rgba(41, 35, 35, 0.04)',
        'paper-lg': '0 16px 36px -10px rgba(41, 35, 35, 0.12), 0 4px 12px -3px rgba(41, 35, 35, 0.05)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(255, 255, 255, 0.04)',
      },
    },
  },
  plugins: [],
};