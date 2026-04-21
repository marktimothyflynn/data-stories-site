/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand — deep teal/blue-green
        brand: {
          DEFAULT: '#0d9488',  // teal-600 — primary accent
          dark: '#0f766e',     // teal-700 — hover, emphasis
          light: '#ccfbf1',    // teal-100 — subtle backgrounds
        },

        // Surface — warm whites
        surface: {
          DEFAULT: '#faf8f5',    // warm off-white background
          elevated: '#ffffff',   // cards, containers
        },

        // Text — warm near-blacks and greys
        'text-primary': '#1c1917',    // stone-900 — body text, headings
        'text-secondary': '#78716c',  // stone-500 — captions, metadata
        'text-muted': '#a8a29e',      // stone-400 — placeholders, subtle

        // Data visualisation palette — distinct, accessible, colour-blind safe
        'data-1': '#0d9488',  // teal
        'data-2': '#6366f1',  // indigo
        'data-3': '#f59e0b',  // amber
        'data-4': '#ec4899',  // pink
        'data-5': '#8b5cf6',  // violet
        'data-6': '#06b6d4',  // cyan
        'data-positive': '#16a34a',  // green-600
        'data-negative': '#dc2626',  // red-600
        'data-neutral': '#78716c',   // stone-500

        // Semantic
        interactive: {
          DEFAULT: '#0d9488',  // matches brand
          hover: '#0f766e',    // matches brand-dark
        },
        success: '#16a34a',    // green-600
        warning: '#d97706',    // amber-600
        error: '#dc2626',      // red-600

        // Borders
        border: {
          DEFAULT: '#e7e5e4',  // stone-200
          strong: '#d6d3d1',   // stone-300
        },
      },

      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },

      fontSize: {
        'display': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],       // 48px
        'h1': ['2.375rem', { lineHeight: '1.2', fontWeight: '700' }],        // 38px
        'h2': ['1.875rem', { lineHeight: '1.2', fontWeight: '600' }],        // 30px
        'h3': ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],          // 24px
        'body-large': ['1.125rem', { lineHeight: '1.6' }],                   // 18px
        'body': ['1rem', { lineHeight: '1.6' }],                             // 16px
        'small': ['0.875rem', { lineHeight: '1.4' }],                        // 14px
        'caption': ['0.75rem', { lineHeight: '1.4' }],                       // 12px
      },

      spacing: {
        'xs': '0.25rem',   // 4px
        'sm': '0.5rem',    // 8px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
        '4xl': '6rem',     // 96px
      },

      maxWidth: {
        'content-text': '720px',
        'content-wide': '1200px',
      },
    },
  },
};
