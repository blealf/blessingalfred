import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--color-bg) / <alpha-value>)',
        elevated: 'hsl(var(--color-bg-elevated) / <alpha-value>)',
        foreground: 'hsl(var(--color-text) / <alpha-value>)',
        muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        'accent-soft': 'hsl(var(--color-accent-soft) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: 'var(--fluid-xs)',
        sm: 'var(--fluid-sm)',
        base: 'var(--fluid-base)',
        lg: 'var(--fluid-lg)',
        xl: 'var(--fluid-xl)',
        '2xl': 'var(--fluid-2xl)',
        '3xl': 'var(--fluid-3xl)',
        '4xl': 'var(--fluid-4xl)',
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 8rem)',
        gutter: 'clamp(1rem, 4vw, 2.5rem)',
      },
      boxShadow: {
        glow: '0 0 60px -12px hsl(var(--color-accent) / 0.35)',
        card: '0 25px 50px -12px hsl(222 47% 4% / 0.65)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% -20%, hsl(var(--color-accent) / 0.15), transparent)',
      },
    },
  },
  plugins: [],
} satisfies Config
