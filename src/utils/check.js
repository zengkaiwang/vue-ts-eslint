const exec = require('child_process').exec
const CLIEngine = require('eslint').CLIEngine
const cli = new CLIEngine({
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
    'no-tabs': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
})

function getErrorLevel (number) {
  switch (number) {
    case 2:
      return 'error'

    case 1:
      return 'warn'
  }
  return 'undefined'
}

function filter (arr) {
  arr = arr || []
  return arr.filter(item => {
    return /^src\//.test(item)
  })
}

let pass = 0
exec('git diff --cached --name-only | grep -E ".(ts|vue)$"', (error, stdout) => {
  if (stdout.length) {
    let array = stdout.split('\n')
    array = filter(array)
    const results = cli.executeOnFiles(array).results
    let errorCount = 0
    let warningCount = 0
    results.forEach((result) => {
      errorCount += result.errorCount
      warningCount += result.warningCount
      if (result.messages.length > 0) {
        console.log('\n')
        console.log(result.filePath)
        result.messages.forEach((obj) => {
          const level = getErrorLevel(obj.severity)
          console.log(`   ${obj.line}:${obj.column}  ${level}  ${obj.message}  ${obj.ruleId} ${obj.fix}`)
          pass = 1
        })
      }
    })
    if (warningCount > 0 || errorCount > 0) {
      console.log(`\n   ${errorCount + warningCount} problems (${errorCount} ${'errors'} ${warningCount} warnings)`)
    }
    process.exit(pass)
  }
  if (error) {
    console.log('wangzk', error)
  }
})
