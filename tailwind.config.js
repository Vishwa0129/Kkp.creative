/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'gradient-flow': 'gradient-flow 8s ease infinite',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'float-3d': 'float3d 6s ease-in-out infinite',
        'spin-3d': 'spin3d 20s linear infinite',
        'bounce-3d': 'bounce3d 2s ease-in-out infinite',
        'tilt-3d': 'tilt3d 4s ease-in-out infinite',
        'particle-drift': 'particle-drift 12s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'morphing-shape': 'morphing-shape 8s ease-in-out infinite',
        'holographic': 'holographic 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '25%': { 'background-position': '100% 50%' },
          '50%': { 'background-position': '50% 100%' },
          '75%': { 'background-position': '50% 0%' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1deg)' },
        },
        'float3d': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'translateY(-12px) translateZ(8px) rotateX(3deg) rotateY(3deg)' },
          '50%': { transform: 'translateY(-8px) translateZ(15px) rotateX(-3deg) rotateY(-3deg)' },
          '75%': { transform: 'translateY(-15px) translateZ(5px) rotateX(2deg) rotateY(-2deg)' },
        },
        'spin3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '25%': { transform: 'rotateX(90deg) rotateY(0deg) rotateZ(0deg)' },
          '50%': { transform: 'rotateX(90deg) rotateY(90deg) rotateZ(0deg)' },
          '75%': { transform: 'rotateX(90deg) rotateY(90deg) rotateZ(90deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        },
        'bounce3d': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) translateZ(8px) scale(1.03)' },
        },
        'tilt3d': {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '25%': { transform: 'rotateX(3deg) rotateY(3deg) rotateZ(1deg)' },
          '50%': { transform: 'rotateX(-3deg) rotateY(-3deg) rotateZ(-1deg)' },
          '75%': { transform: 'rotateX(2deg) rotateY(-2deg) rotateZ(0.5deg)' },
        },
        'particle-drift': {
          '0%': { transform: 'translateY(100vh) translateX(0px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) translateX(50px) rotate(180deg)', opacity: '0' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)' 
          },
          '50%': { 
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)' 
          },
        },
        'morphing-shape': {
          '0%, 100%': { 'border-radius': '20px', transform: 'rotate(0deg) scale(1)' },
          '25%': { 'border-radius': '40px 20px 20px 40px', transform: 'rotate(45deg) scale(1.05)' },
          '50%': { 'border-radius': '40px', transform: 'rotate(90deg) scale(0.95)' },
          '75%': { 'border-radius': '20px 40px 40px 20px', transform: 'rotate(135deg) scale(1.02)' },
        },
        'holographic': {
          '0%, 100%': { 'background-position': '0% 50%', filter: 'hue-rotate(0deg)' },
          '25%': { 'background-position': '100% 50%', filter: 'hue-rotate(90deg)' },
          '50%': { 'background-position': '50% 100%', filter: 'hue-rotate(180deg)' },
          '75%': { 'background-position': '50% 0%', filter: 'hue-rotate(270deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [],
}