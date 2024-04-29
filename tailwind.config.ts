import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        "text-gradient": "linear-gradient(to right, #e73c9f, #a032c6, #4125f8)",
      },
      colors:{
        primary: '#0f0b29',
        secondary: '#E8E0F9',
        tertiary: '#BCB9DF',
        quaternary: '#432F65',
        quinary: '#654798',
      }
    },
  },
  plugins: [],
} satisfies Config

