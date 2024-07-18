import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    vue: {
      overrides: {
        'vue/define-emits-declaration': ['error', 'type-literal'],
      },
    },
    stylistic: true,
    typescript: true,
    formatters: true,
  },
  {
    rules: {
      'import/no-unresolved': 'off',
      'import/first': 'off',
      'node/prefer-global/process': 'off',
      'ts/consistent-type-definitions': 'off',
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
    ignores: ['node_modules', 'dist'],
  },
  [...tailwind.configs['flat/recommended'], {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cn'],
        config: './tailwind.config.ts',
      },
    },
  }],
)
