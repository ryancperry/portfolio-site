import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ),
  {
    ignores: [
      'node_modules/',
      '.next/',
      'dist/',
      'public/',
      'package-lock.json',
    ],
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Disable if using TypeScript
    },
  },
];

export default eslintConfig;
