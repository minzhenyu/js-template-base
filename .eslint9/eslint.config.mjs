import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '.history',
      'node_modules',
      'dist',
      'public',
      '*.sh',
      '*.md',
      '*.woff',
      '*.ttf',
      '.vscode',
      '.idea',
      'dist/',
      '/public/',
      '/docs',
      '.husky',
      '.local',
      '/bin/',
      '/src/mock/',
    ],
  },
  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs['flat/recommended'],

  stylistic.configs.customize({
    indent: 2,
    quotes: 'double',
    semi: true,
    jsx: true,
    braceStyle: '1tbs',
    arrowParens: 'always',
    commaDangle: 'never',
  }),
  // js 规则
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'warn',
    },
  },
  // 配置全局变量
  // {
  //   languageOptions: {
  //     globals: {
  //       ...globals.browser,
  //       ...globals.node,
  //       ...globals.es2021,
  //       // 追加一些其他自定义全局规则
  //       wx:true,
  //     }
  //   }
  // }
  // 配置全局变量
  {
    files: ['**/*.js', '**/*.mjs'],
    ignores: ['**/*.test.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.amd,
      },
    },
  },

  // vue 规则
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
    },
  },
  // typescript 规则
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      // 在这里追加 typescript 规则
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  /**
   * prettier 配置
   * 会合并根目录下的prettier文件
   * @see https://prettier.io/docs/en/options
   */
  eslintPluginPrettierRecommended,

)
