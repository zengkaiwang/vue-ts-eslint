module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 允许多余空格
    'no-trailing-spaces': 0,
    // 关闭制表符
    'no-tabs': 0,
    'eol-last': 0,
    // 函数名称和括号之间必须有空格关闭
    'space-before-function-paren': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
