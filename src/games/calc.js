import gameEngine from '../utils/gameEngine.js';
import getRandomNum from '../utils/getRandomNum.js';

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

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const correctAnswer = calculate(num1, num2, operator);
  const question = `${num1} ${operator} ${num2}`;
  return { question, correctAnswer: correctAnswer.toString() };
};

const runCalcGame = () => {
  gameEngine('What is the result of the expression?', getQuestionAndAnswer);
};

export default runCalcGame;
