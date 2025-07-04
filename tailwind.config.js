/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0f172a',
        'secondary-bg': '#1e293b',
        'accent': '#06b6d4',            // ✅ Teal
        'accent-alt': '#f59e0b',        // ✅ Amber
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'glass-hud': 'rgba(255, 255, 255, 0.04)', // ← Add this back
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out both',
        'slide-up': 'slide-up 0.7s ease-out both',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        sm: '4px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
