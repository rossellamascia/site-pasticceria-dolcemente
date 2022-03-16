module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
        },
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        // foreground
        'primary-fg': {
          DEFAULT: 'var(--color-primary-fg)',
          light: 'var(--color-primary-light-fg)',
        },
        'success-fg': 'var(--color-success-fg)',
        'danger-fg': 'var(--color-danger-fg)',
        'warning-fg': 'var(--color-warning-fg)',
      },
    },
  },
};
