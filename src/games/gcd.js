import gameEngine from '../utils/gameEngine.js';
import getRandomNum from '../utils/getRandomNum.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return { question, correctAnswer: correctAnswer.toString() };
};

const runGcdGame = () => {
  gameEngine(
    'Find the greatest common divisor of given numbers.',
    getQuestionAndAnswer,
  );
};

export default runGcdGame;
