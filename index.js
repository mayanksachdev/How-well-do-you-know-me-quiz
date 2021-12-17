var chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.redBright('Please, enter your name: '))
console.log(chalk.cyanBright('welcome, '  + chalk.redBright.bold.italic(userName) + ' "to the HOW WELL DO YOU KNOW ME?" quiz!'))
console.log(chalk.magenta.bgRedBright("let's playy!"))


