/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2019-11-01 14:58:31
 * @LastEditors: sjq
 * @LastEditTime: 2019-11-30 19:06:49
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    indent: ['off', 'tab'],
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-extra-semi': 'off',
    'no-empty': 'off',
    'no-trailing-spaces': 0,
    'space-before-function-paren': [2, 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'error',
    camelcase: ['error', {
      allow: ['aa_bb']
    }]
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/typescript']
}