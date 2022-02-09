module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          ligth: 'var(--color-primary-ligth)',
        },
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        // foreground
        'primary-fg': {
          DEFAULT: 'var(--color-primary-fg)',
          ligth: 'var(--color-primary-ligth-fg)',
        },
        'success-fg': 'var(--color-success-fg)',
        'danger-fg': 'var(--color-danger-fg)',
        'warning-fg': 'var(--color-warning-fg)',
      },
    },
  },
};
