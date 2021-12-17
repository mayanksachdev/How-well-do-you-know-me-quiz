var chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.redBright('Please, enter your name: '))
console.log(chalk.cyanBright('welcome, '  + chalk.magenta.bold.italic(userName) + ' "to the HOW WELL DO YOU KNOW ME?" quiz!'))
console.log(chalk.blue('Please, read the instructions carefully!'))
console.log(chalk.yellowBright('1. ' + 'this quiz comprises of 10 questions. '))
console.log(chalk.yellowBright('2. ' + 'you will be rewarded 1 point for every correct answer. '))
console.log(chalk.yellowBright('3. ' + 'there is no deduction for wrong answer.'))
console.log(chalk.yellowBright('4. ' + chalk.underline('You only need to enter the option number for responding!')))
console.log('_________________________________________________________________')
console.log(chalk.magenta.bgRedBright("let's playy!"))


var quizOne = {
  question: 'What does my name mean?',
  option: ['star','peacock','moon','river'],
  answer: 'moon'
}
var quizTwo = {
  question: 'What is my favorite food?',
  option: ['noodles','pizza','pani-puri','pav bhaji'],
  answer: 'noodles'
}
var quizThree = {
  question: 'What is my favorite series?',
  option: ['star wars','one piece','FRIENDS','squid game'],
  answer: 'one piece'
}
var quizFour = {
  question: 'What did I like to do as a child?',
  option: ['singing','cycling','drawing','dancing'],
  answer: 'dancing'
}
var quizFive = {
  question: 'What is my zodiac sign?',
  option: ['aquarius','sagittarius','pisces','capricorn'],
  answer: 'aquarius'
}
var quizSix = {
  question: 'What is my favorite flavor of ice cream?',
  option: ['vanilla','strawberry','chocochip','black-current'],
  answer: 'chocochip'
}
var quizSeven= {
  question: 'Which languages do I speak?',
  option: ['hindi','english','sindhi','all'],
  answer: 'all'
}
var quizEight = {
  question: 'Do I like waking up early or staying up late?',
  option: ['early riser','night owl'],
  answer: 'night owl'
}
var quizNine = {
  question: 'What is my favorite k-drama?',
  option: ['signal','its okay, not to be okay','My Mister','itaewon classes'],
  answer: 'My Mister'
}
var quizTen = {
  question: 'What is my deepest fear?',
  option: ['fire','height','rodents','darkness'],
  answer: 'rodents'
}

function play(question,optionArr,answer) 
{
  var index = readlineSync.keyInSelect(optionArr, chalk.black.bgWhite(question))
  var userAnswer = optionArr[index];
  if (userAnswer === answer ) 
  {
    console.log(chalk.greenBright('you are correct!'))
  }
   else 
  {
    console.log(chalk.red('you are wrong!'))
    console.log('the correct answer is, ' + chalk.green.underline.bold(answer))
  }

}





















