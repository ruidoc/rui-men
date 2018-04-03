
// 命令行加载动画
const ora = require('ora')
// 删除文件
const rm = require('rimraf')
// 颜色插件
const chalk = require('chalk')

const spinner = ora('正在抽奖中...')
spinner.start()

setTimeout(()=> {
    spinner.stop()
    process.stdout.write(chalk.bold.green('中奖了！')+'\n')
    // process.stdout.write(process.cwd())
},1000)

process.on('beforeExit',code=> {
    console.log('outbefore: '+code)
})