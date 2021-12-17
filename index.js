var chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.redBright('Please, enter your name: '))
console.log(chalk.cyanBright('welcome, '  + chalk.magenta.bold.italic(userName) + ' "to the HOW WELL DO YOU KNOW ME?" quiz!'))
console.log(chalk.blue('Please, read the instructions carefully!'))
console.log(chalk.yellowBright('1. ' + 'this quiz comprises of 10 questions. '))
console.log(chalk.yellowBright('2. ' + 'you will be rewarded 1 point for every correct answer. '))
console.log(chalk.yellowBright('3. ' + 'there is no deduction for wrong answer.'))
console.log(chalk.yellow('4. ' + chalk.bgWhite('You only need to enter the option number for responding!')))
console.log('_________________________________________________________________')
console.log(chalk.magenta.bgRedBright("let's playy!"))




