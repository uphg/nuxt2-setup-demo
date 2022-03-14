module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'space-before-function-paren': 'off',
    'node/no-callback-literal': 'off',

    // vue
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/require-default-prop': 'off'

    // typescript
    // '@typescript-eslint/no-unused-vars': 'off'
  }
}
