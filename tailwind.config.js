/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '1' }],
        '6xl': ['60px', { lineHeight: '1' }],
        '7xl': ['72px', { lineHeight: '1' }],
        '8xl': ['96px', { lineHeight: '1' }],
        '9xl': ['128px', { lineHeight: '1' }],
      },
      spacing: {
        15: '3.75rem', // 60px
        18: '4.5rem', // 72px
        22: '5.5rem', // 88px
        26: '6.5rem', // 104px
        30: '7.5rem', // 120px
        34: '8.5rem', // 136px
        38: '9.5rem', // 152px
        42: '10.5rem', // 168px
        46: '11.5rem', // 184px
        50: '12.5rem', // 200px
      },
      colors: {
        // Primary colors
        primary: {
          50: '#9EFF00',
          80: '#CCF266',
          90: '#E5F9B3',
        },
        // Accent colors (for FAQ active state)
        accent: {
          50: '#C5FF66',
          60: '#B8FF4D',
          70: '#ABFF33',
        },
        // Neutral colors
        neutral: {
          0: '#FFFFFF',
          10: '#F5F5F5',
          15: '#E6E6E6',
          20: '#CCCCCC',
          30: '#B3B3B3',
          40: '#999999',
          50: '#808080',
          60: '#666666',
          70: '#4D4D4D',
          80: '#333333',
          90: '#1A1A1A',
          100: '#000000',
        },
        // Dark colors
        dark: {
          10: '#1A1A1A',
          15: '#2E2E2E',
          20: '#424242',
          25: '#575757',
          30: '#6B6B6B',
        },
        // Danger colors
        danger: {
          50: '#FF4444',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/squares.png')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(158, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(158, 255, 0, 0.6)' },
        },
      },
      aspectRatio: {
        card: '532 / 577',
        testimonial: '798 / 574',
        feature: '790 / 378',
      },
      minHeight: {
        card: '200px',
        'card-sm': '240px',
        'card-md': '280px',
        'card-lg': '318px',
        testimonial: '350px',
        'testimonial-sm': '450px',
        'testimonial-lg': '574px',
      },
      maxWidth: {
        container: '1596px',
      },
    },
  },
  plugins: [],
};
