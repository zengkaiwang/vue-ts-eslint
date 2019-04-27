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
    // 关闭制表符
    'no-tabs': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // 设置要检测的代码的模块规范
    sourceType: 'module'
  }
}
