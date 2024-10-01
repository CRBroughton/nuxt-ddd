import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default await antfu({
  ignores: ['dist', '**/dist/**', 'public', '**/public/**', 'coverage', '**/coverage/**', 'node_modules', '**/node_modules/**'],
  rules: {
    'no-console': 'error',
    'no-restricted-syntax': [
      'error',
      'TSEnumDeclaration',
      'Decorator',
    ],
  },
}, ...tailwind.configs['flat/recommended'])
