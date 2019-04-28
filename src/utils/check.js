// check.js
const exec = require('child_process').exec
const CLIEngine = require('eslint').CLIEngine
const cli = new CLIEngine({})

function getErrorLevel (number) {
  switch (number) {
    case 2:
      return 'error'
    case 1:
      return 'warn'
    default:
  }
  return 'undefined'
}

let pass = 0
exec('git diff --cached --name-only | grep -E ".(ts|vue)$"', (error, stdout) => {
  if (stdout.length) {
    const array = stdout.split('\n')
    array.pop()
    let results = []
    try {
      results = cli.executeOnFiles(array).results
    } catch (err) {
      console.log('未执行eslint校验，直接提交成功')
      process.exit(0)
    }    
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
          console.log(`   ${obj.line}:${obj.column}  ${level}  ${obj.message}  ${obj.ruleId}`)
          pass = 1
        })
      }
    })
    if (warningCount > 0 || errorCount > 0) {
      console.log(`\n   ${errorCount + warningCount} problems (${errorCount} ${'errors'} ${warningCount} warnings)`)
    }
    process.exit(pass)
  }
  if (error !== null) {
    // console.log(`exec error: ${error}`)
  }
})
