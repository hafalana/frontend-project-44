import readlineSync from "readline-sync";
import runBrainGames from "../cli.js";
import getRandomNum from "../getRandomNum.js";





const calculate = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return null;
    }
};



const runCalcGame = () => {
    const userName = runBrainGames();
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i++) {
        const num1 = getRandomNum();
        const num2 = getRandomNum();
        const operators = ['+', '-', '*'];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        const question = `${num1} ${operator} ${num2}`;
        const correctAnswer = calculate(num1, num2, operator);

        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
          } else {
            console.log(`Your answer: ${userAnswer}`);
            console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
          }
      }
    
    console.log(`Congratulations, ${userName}!`);
   };
    

export default runCalcGame;













