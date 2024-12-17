import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F0B90B', // 메인 색상
        },
        hover: {
          primary: '#F0B90B', // 메인 호버 색상
        },
        base: {
          bg: '#0B0E11', // 배경색
        },
        divider: {
          DEFAULT: '#2B3139',
        },
        disabled: {
          DEFAULT: '#5E6673',
        },
        primary: {
          bg: '#181A20', // 배경색
          text: '#EAECEF', // 텍스트 색상
        },
        secondary: {
          DEFAULT: '#848E9C', // 기본 색상
          text: '#848E9C', // 텍스트 색상
        },
        third: {
          text: '#B7BDC6', // 텍스트 색상
        },
        long: {
          text: '#2EBD85', // 텍스트 색상
        },
        short: {
          text: '#F6465D', // 텍스트 색상
        },
        positive: {
          DEFAULT: '#2EBD85', // 텍스트 색상
        },
        negative: {
          DEFAULT: '#F6465D', // 텍스트 색상
        },
        input: {
          border: '#474D57', // 테두리 색상
        },
      },
    },
    fontFamily: {
      pretendard: ['Pretendard Variable', 'Pretendard'],
      sans: [
        'var(--font-pretendard)',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'Roboto',
        'Helvetica Neue',
        'Segoe UI',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'Malgun Gothic',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'sans-serif',
      ],
    },
  },
  plugins: [],
} satisfies Config;
